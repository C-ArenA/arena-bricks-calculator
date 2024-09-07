<script setup lang="ts">
import Button from 'primevue/button'
import RiArrowRightLine from '~icons/ri/arrow-right-line'
import PhWallFill from '~icons/ph/wall-fill'
</script>

<template>
  <section class="text-center my-20 max-w-6xl mx-auto">
    <PhWallFill class="m-auto text-6xl mb-5" />
    <h1 class="mb-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
      Cuántos Ladrillos
      <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >ArenA</span
      >
      necesitarás para tu muro?
    </h1>
    <p class="mb-12 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
      Calcula facilmente la cantidad que requieras usando nuestra fácil calculadora. Ladrillo a
      ladrillo, muro a muro,
      <span class="text-color-emphasis font-bold underline underline-offset-4">Cerámica ArenA</span>
      siempre contigo
    </p>
    <Button as="router-link" label="Iniciar Calculadora" to="/calculator" iconPos="right">
      <template #icon="slotProps">
        <div :class="slotProps.class">
          <RiArrowRightLine class="block" />
        </div>
      </template>
    </Button>
    <p class="text-sm mt-16 text-muted-color">
      Si prefieres una atención personalizada puedes contactarnos vía Whatsapp a los siguientes
      números: 73745255 - 73546240
    </p>
  </section>
</template>
