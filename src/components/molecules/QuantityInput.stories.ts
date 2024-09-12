import type { Meta, StoryObj } from '@storybook/vue3'
import QuantityInput from './QuantityInput.vue'
import MdiSpray from '~icons/mdi/spray'
import PhRuler from '~icons/ph/ruler'
import PhWallLight from '~icons/ph/wall-light'
import PhCubeFill from '~icons/ph/cube-fill'
import IconParkOutlineWeight from '~icons/icon-park-outline/weight'
import RiTimeFill from '~icons/ri/time-fill'
import { ref } from 'vue'
import { units } from '@/data/units'

const meta: Meta<typeof QuantityInput> = {
  component: QuantityInput,
}
export default meta
type Story = StoryObj<typeof QuantityInput>

const render = (args: any) => ({
  components: { QuantityInput },
  setup() {
    const q = ref(0)
    return { args, q }
  },
  template: `<QuantityInput v-bind="args" v-model="q" />`,
})

export const Default: Story = {
  args: {},
}
export const WithIcon: Story = {
  args: {
    iconComponent: MdiSpray,
  },
}
export const WithLabel: Story = {
  args: {
    inputLabel: 'Ingresar Cantidad',
  },
}
export const WithLabelAndInstructions: Story = {
  args: {
    inputLabel: 'Ingresar Cantidad',
    instructions: 'Debe ingresar una cantidad',
  },
}
export const Length: Story = {
  render: render,
  args: {
    dimensionName: 'length',
    iconComponent: PhRuler,
  },
}
export const LengthInMilimeters: Story = {
  render: render,
  args: {
    dimensionName: 'length',
    iconComponent: PhRuler,
    defaultUnit: units.find((u) => u.name === 'milímetro'),
  },
}
export const Area: Story = {
  args: {
    dimensionName: 'area',
    iconComponent: PhWallLight,
  },
}
export const Volume: Story = {
  args: {
    dimensionName: 'volume',
    iconComponent: PhCubeFill,
  },
}
export const Mass: Story = {
  args: {
    dimensionName: 'mass',
    iconComponent: IconParkOutlineWeight,
  },
}
export const Time: Story = {
  args: {
    dimensionName: 'time',
    iconComponent: RiTimeFill,
  },
}
