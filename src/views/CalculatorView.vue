<script setup lang="ts">
import FormStepper from '@/components/FormStepper.vue';
</script>

<template>
  <h1>Calculadora de Ladrillos ArenA</h1>
  <FormStepper />
  <RouterView />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
