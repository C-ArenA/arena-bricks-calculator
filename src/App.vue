<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'
import { ref } from 'vue'
import LightDarkToggle from './components/atoms/LightDarkToggle.vue'
const router = useRouter()
const route = router.currentRoute
const menuItems = ref<MenuItem[]>([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/'),
  },
  {
    label: 'Calculadora',
    icon: 'pi pi-calculator',
    command: () => router.push('/calculator'),
  },
  {
    label: 'Storybook',
    icon: 'pi pi-book',
    url: 'http://localhost:6006/',
    target: '_blank',
    visible: !import.meta.env.PROD,
  },
  {
    label: 'Admin',
    icon: 'pi pi-cog',
    command: () => router.push('/admin'),
    visible: !import.meta.env.PROD,
  },
])
</script>

<template>
  <header class="print:!hidden" v-if="!route.path.includes('/admin')">
    <Menubar class="m-2" :model="menuItems">
      <template #start>
        <img src="@/assets/logos/imago_arena.png" alt="logo" class="max-h-6 mr-2" />
      </template>
      <template #end>
        <LightDarkToggle />
      </template>
    </Menubar>
  </header>
  <Toast />
  <ConfirmDialog />
  <main class="px-3">
    <RouterView />
  </main>
</template>
