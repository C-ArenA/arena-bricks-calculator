<script setup lang="ts">
import { useBrickStore } from '@/stores/brick'
import { useProducedBrickStore } from '@/stores/producedBrick'
import type { Brick } from '@/types/materials'
import DataTable from 'primevue/datatable'
import { useConfirm } from 'primevue/useconfirm'
import { onMounted, ref } from 'vue'
import ShowBrickView from './ShowBrickView.vue'
import CreateBrickForm from './CreateBrickForm.vue'
import EditBrickForm from './EditBrickForm.vue'

// STORES
const brickStore = useBrickStore()
const producedBrickStore = useProducedBrickStore()

// VARIABLES
const confirm = useConfirm()
const updating = ref(false)
const showDialogVisible = ref(false)

// METHODS
const confirmDeletion = (brick: Brick) => {
  confirm.require({
    message: `Estas seguro de querer eliminar el ladrillo ${brick.name}?`,
    header: 'Eliminar ladrillo',
    icon: 'pi pi-exclamation-triangle',
    accept: () => brickStore.remove(brick.id),
    reject: () => {},
  })
}
const updateProducedBrick = async (brick: Brick) => {
  updating.value = true
  const response = brick.is_produced
    ? await producedBrickStore.destroy(brick)
    : await producedBrickStore.create(brick)
  if (response.ok) {
    brick.is_produced = !brick.is_produced
  }
  updating.value = false
}

const openShowDialog = (brick: Brick) => {
  brickStore.get(brick.id)
  showDialogVisible.value = true
}
const openEditDialog = async (brick: Brick) => {
  await brickStore.get(brick.id)
  brickStore.editBrickDialog = true
}

// HOOKS
onMounted(() => {
  brickStore.load()
})
</script>

<template>
  <div>
    <Dialog
      v-model:visible="showDialogVisible"
      modal
      header="Ver Ladrillo"
      :style="{ width: '25rem' }">
      <ShowBrickView />
    </Dialog>
    <Dialog v-model:visible="brickStore.createBrickDialog" modal header="Crear Ladrillo" :style="{ width: '25rem' }">
      <CreateBrickForm />
    </Dialog>
    <Dialog v-model:visible="brickStore.editBrickDialog" modal header="Editar Ladrillo" :style="{ width: '25rem' }">
      <EditBrickForm />
    </Dialog>
    <DataTable :value="brickStore.bricks" :loading="updating">
      <template #header>
        <div class="flex flex-wrap items-center gap-6">
          <span class="text-xl font-bold">Ladrillos</span>
          <Button icon="pi pi-plus" raised label="Crear" @click="brickStore.createBrickDialog = true" />
        </div>
      </template>
      <Column field="name" header="Nombre" :frozen="true"></Column>
      <Column field="description" header="Descripción"></Column>
      <Column field="length" header="Largo"></Column>
      <Column field="height" header="Alto"></Column>
      <Column field="width" header="Ancho"></Column>
      <Column header="En producción">
        <template #body="slotProps">
          <ToggleSwitch
            :model-value="slotProps.data.is_produced"
            @click="updateProducedBrick(slotProps.data)" />
        </template>
      </Column>
      <Column header="Acciones">
        <template #body="slotProps">
          <div class="flex">
            <Button
              icon="pi pi-eye"
              severity="info"
              rounded
              text
              @click="openShowDialog(slotProps.data)"
              :disabled="updating" />
            <Button
              icon="pi pi-pencil"
              severity="warning"
              rounded
              text
              @click="openEditDialog(slotProps.data)"
              :disabled="updating" />
            <Button
              icon="pi pi-trash"
              severity="danger"
              rounded
              text
              @click="confirmDeletion(slotProps.data)"
              :disabled="updating" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
