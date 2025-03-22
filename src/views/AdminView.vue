<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
const menuItems = ref([
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    command: () => {
      router.push('/admin')
    },
  },
  {
    label: 'Ladrillos',
    icon: 'pi pi-fw pi-bars',
    command: () => {
      router.push('/admin/bricks')
    },
  },
  {
    label: 'Calculadora',
    icon: 'pi pi-calculator',
    command: () => {
      router.push('/')
    },
  },
])
</script>

<template>
  <div class="flex h-screen p-4">
    <div class="sidebar">
      <Menu :model="menuItems" class="h-full" />
    </div>
    <div class="content p-8">
      <RouterView />
    </div>
  </div>
</template>
