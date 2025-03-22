<script setup lang="ts">
import type { Brick } from '@/types/materials'
import DataTable from 'primevue/datatable'
import { onMounted, ref } from 'vue'

const bricks = ref<Brick[]>([])
const updating = ref(false)
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
          <ToggleSwitch :model-value="slotProps.data.is_produced" @click="updateProducedBrick(slotProps.data)" :disabled="updating"/>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
