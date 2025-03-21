<script setup lang="ts">
import type { Brick } from '@/types/materials';
import DataTable from 'primevue/datatable';
import { onMounted, ref } from 'vue';

const bricks = ref<Brick[]>([])
onMounted(() => {
  fetch('http://localhost:8000/api/v1/bricks').then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        bricks.value = data["data"]
      })
    }
  })
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
    </DataTable>
  </div>
</template>

