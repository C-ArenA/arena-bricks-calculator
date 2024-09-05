<template>
    <button @click="dropdownMenuIsOpen = !dropdownMenuIsOpen"
        class="rounded-lg relative inline-flex items-center justify-end py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button">
        {{ selectedItem?.name }}
        <RiArrowDropDownLine />

        <div v-if="dropdownMenuIsOpen"
            class="absolute top-12 left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-currency-button">
                <li v-for="item in items" :key="item.id">
                    <button type="button" @click="selectedItem = item"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">
                        <div class="inline-flex items-center">
                            {{ item.name }}
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    </button>
</template>

<script setup lang="ts">
import RiArrowDropDownLine from '~icons/ri/arrow-drop-down-line';
import { ref } from 'vue'
interface Item {
    id: number,
    name: string
}
interface Props {
    items: Array<Item>,
    defaultItem?: Item
}
const props = defineProps<Props>();

const dropdownMenuIsOpen = ref<boolean>(false);
const selectedItem = ref<Item | undefined>(props.defaultItem)
</script>

<style scoped></style>