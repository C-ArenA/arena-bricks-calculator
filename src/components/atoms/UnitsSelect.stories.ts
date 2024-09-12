import type { Meta, StoryObj } from '@storybook/vue3'
import UnitsSelect from './UnitsSelect.vue'
import type { Unit } from '@/types/quantities'
import { ref } from 'vue'
import { units } from '@/data/units'

const meta: Meta<typeof UnitsSelect> = {
  component: UnitsSelect,
}
export default meta

type Story = StoryObj<typeof UnitsSelect>

const render = (args: any) => ({
  components: { UnitsSelect },
  setup() {
    const unit = ref<Unit | undefined>(units.find((u) => u.name === 'milímetro'))
    return { args, unit }
  },
  template: `<UnitsSelect v-bind="args" v-model="unit" />`,
})
export const Length: Story = {
  args: {
    dimensionName: 'length',
  },
}
export const LengthMilimeters: Story = {
  render: render,
  args: {
    dimensionName: 'length',
  },
}
export const Area: Story = {
  args: {
    dimensionName: 'area',
  },
}
export const Volume: Story = {
  args: {
    dimensionName: 'volume',
  },
}
export const Mass: Story = {
  args: {
    dimensionName: 'mass',
  },
}
export const Time: Story = {
  args: {
    dimensionName: 'time',
  },
}
