<script setup lang="ts">
import type { Brick } from '@/types/materials'
import DataTable from 'primevue/datatable'
import { useConfirm } from 'primevue/useconfirm'
import { onMounted, ref } from 'vue'

const confirm = useConfirm()
const bricks = ref<Brick[]>([])
const updating = ref(false)
const confirmDeletion = (brick: Brick) => {
  confirm.require({
    message: `Estas seguro de querer eliminar el ladrillo ${brick.name}?`,
    header: 'Eliminar ladrillo',
    icon: 'pi pi-exclamation-triangle',
    accept: () => console.log('deleted'),
    reject: () => {},
  })
}
const updateProducedBrick = (brick: Brick) => {
  if (brick.is_produced) {
    deleteProducedBrick(brick)
    return
  }
  createProducedBrick(brick)
}
const fetchBricks = async () => {
  const response = await fetch(import.meta.env.VITE_API_URL + '/v1/bricks')
  if (response.ok) {
    const json = await response.json()
    bricks.value = json['data']
    console.log(json['data'])
  }
}
const createProducedBrick = async (brick: Brick) => {
  updating.value = true
  const response = await fetch(import.meta.env.VITE_API_URL + '/v1/produced-bricks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: brick.id
    })
  })
  if (response.ok) {
    await fetchBricks()
  }
  updating.value = false
}
const deleteProducedBrick = async (brick: Brick) => {
  updating.value = true
  await fetch(import.meta.env.VITE_API_URL + '/v1/produced-bricks/' + brick.id, {
    method: 'DELETE'
  })
  await fetchBricks()
  updating.value = false
}
onMounted(() => {
  fetchBricks()
})
</script>

<template>
  <div>
    <DataTable :value="bricks">
      <Column field="name" header="Nombre"></Column>
      <Column field="description" header="Descripción"></Column>
      <Column field="length" header="Largo"></Column>
      <Column field="height" header="Alto"></Column>
      <Column field="width" header="Ancho"></Column>
      <Column header="En producción">
        <template #body="slotProps">
          <ToggleSwitch
            :model-value="slotProps.data.is_produced"
            @click="updateProducedBrick(slotProps.data)"
            :disabled="updating" />
        </template>
      </Column>
      <Column header="Acciones">
        <template #body="slotProps">
          <Button
            icon="pi pi-pencil"
            severity="warning"
            rounded
            text
            @click="confirmDeletion(slotProps.data)"
            :disabled="updating" />
          <Button
            icon="pi pi-trash"
            severity="danger"
            rounded
            text
            @click="confirmDeletion(slotProps.data)"
            :disabled="updating" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>
