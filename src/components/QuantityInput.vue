<script setup lang="ts">
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import FeInfo from '~icons/fe/info'
import MaterialSymbolsWidth from '~icons/material-symbols/width'
import { onBeforeMount, onMounted, ref } from 'vue'
import type { Unit, Quantity, Dimension } from '@/types/quantities'
import { units as allUnits } from '@/data/units';

interface Props {
    inputLabel: string,
    instructions?: string,
    dimension: Dimension
    inputId: string
}
const props = defineProps<Props>()
const units = ref<Unit[]>([]);
const quantity = ref<Quantity>({ value: 0, unit: undefined })

onBeforeMount(() => {
    units.value = allUnits.filter(unit => unit.dimension === props.dimension)
    if (props.dimension.baseUnit === undefined) {
       throw new Error("No base unit defined for dimension " + props.dimension.name);
    }
    quantity.value = { value: 0, unit: props.dimension.baseUnit }
})

</script>

<template>
    <div>
        <label :for="inputId" class="mb-3 flex gap-2 items-center"><i class="inline">
                <FeInfo class="inline" />
            </i>
            {{ inputLabel }}</label>

        <InputGroup class="mb-5">
            <InputGroupAddon>
                <MaterialSymbolsWidth class="text-2xl" />
            </InputGroupAddon>
            <InputNumber v-model="quantity.value" :inputId="inputId" :useGrouping="false" :minFractionDigits="0"
                :maxFractionDigits="5" locale="es-ES" style="width: 100%" />
            <Select v-model="quantity.unit" :options="units" optionLabel="symbol" placeholder="ux" class="grow-0 w-auto"
                style="width: unset" />
        </InputGroup>
    </div>
</template>