<script setup lang="ts">
import Button from 'primevue/button'
import RiArrowRightLine from '~icons/ri/arrow-right-line'
import PhWallFill from '~icons/ph/wall-fill'
</script>

<template>
  <section class="text-center my-20 max-w-6xl mx-auto">
    <PhWallFill class="m-auto text-6xl mb-5" />
    <h1
      class="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Cuántos Ladrillos
      <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >ArenA</span
      >
      necesitarás para tu muro?
    </h1>
    <p
      class="mb-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >
      Calcula facilmente la cantidad que requieres usando nuestra fácil calculadora de ladrillos.
      Muro a muro, ladrillo a ladrillo, fábrica de ladrillos ArenA siempre contigo
    </p>
    <Button as="router-link" label="Iniciar Calculadora" to="/calculator" iconPos="right">
      <template #icon="slotProps">
        <div :class="slotProps.class">
          <RiArrowRightLine class="block" />
        </div>
      </template>
    </Button>
    <p class="text-sm mt-16 text-gray-400">
      Si prefieres una atención personalizada puedes contactarnos al 73745255 o al 73546240 vía
      Whatsapp.
    </p>
  </section>
</template>
