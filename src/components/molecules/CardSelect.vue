<script setup lang="ts" generic="T">
import Card from 'primevue/card';
import { getCurrentInstance, ref, toRaw } from 'vue';

defineProps<{
   options:T[]
   titleKey?:keyof T
   subtitleKey?:keyof T
   descriptionKey?:keyof T
}>()
const selected = defineModel<T>()
const instance = getCurrentInstance()
const selectorId = ref('selector-' + instance?.uid?.toString())
</script>

<template>
  <div class="flex flex-wrap gap-4 justify-center">
    <div v-for="(option, index) in options" :key="index" class="flex gap-2 max-w-80 basis-60 grow shrink" >
      <label :for="selectorId + index.toString()">
        <Card
          class="overflow-hidden hover:bg-emphasis"
          :class="{
            'border-primary border-2 !bg-highlight': toRaw(selected) == toRaw(option),
          }">
          <template #header></template>
          <template #title><slot name="title" :option="option">{{ titleKey?option[titleKey]:'' }}</slot></template>
          <template #subtitle>
            <slot name="subtitle" :option="option">{{ subtitleKey?option[subtitleKey]:'' }}</slot>
          </template>
          <template #content>
          <slot name="content" :option="option">{{ descriptionKey?option[descriptionKey]:'' }}</slot>
          </template>
        </Card>
      </label>
      <input
        class="hidden"
        v-model="selected"
        type="radio"
        :value="option"
        :id="selectorId + index.toString()" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
