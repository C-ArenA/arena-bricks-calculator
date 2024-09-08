<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menubar from 'primevue/menubar'
import ToggleButton from 'primevue/togglebutton'
import { useRouter } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'
import { ref } from 'vue'
const router = useRouter()
const menuItems = ref<MenuItem[]>([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/')
  },
  {
    label: 'Calculadora',
    icon: 'pi pi-calculator',
    command: () => router.push('/calculator')
  },
  {
    label: 'Pruebas',
    icon: 'pi pi-pencil',
    command: () => router.push('/pruebas')
  }
])
const isDarkMode = ref(false)
const toggleDarkMode = () => {
  const element = document.querySelector('html')
  if (isDarkMode.value) {
    element?.classList.add('arena-bricks-calculator-dark-mode')
  } else {
    element?.classList.remove('arena-bricks-calculator-dark-mode')
  }
}
</script>

<template>
  <header class="">
    <Menubar class="m-2" :model="menuItems">
      <template #start>
        <img src="@/assets/logos/imago_arena.png" alt="logo" class="max-h-6 mr-2" />
      </template>
      <template #end>
        <ToggleButton
          v-model="isDarkMode"
          onLabel="🌛"
          offLabel="🌞"
          @change="toggleDarkMode()"
          class="bg-transparent"
        />
      </template>
    </Menubar>
  </header>
  <main class="px-3">
    <RouterView />
  </main>
</template>

<style scoped></style>
<style>
html {
  background-color: var(--p-primary-contrast-color);
}
</style>
