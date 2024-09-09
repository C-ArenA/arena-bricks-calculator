import type { Meta, StoryObj } from '@storybook/vue3'
import UnitsSelect from './UnitsSelect.vue'

const meta: Meta<typeof UnitsSelect> = {
  component: UnitsSelect
}
export default meta

type Story = StoryObj<typeof UnitsSelect>

export const Length: Story = {
  args: {
    dimensionName: 'length'
  }
}
export const Area: Story = {
  args: {
    dimensionName: 'area'
  }
}
export const Volume: Story = {
  args: {
    dimensionName: 'volume'
  }
}
export const Mass: Story = {
  args: {
    dimensionName: 'mass'
  }
}
export const Time: Story = {
  args: {
    dimensionName: 'time'
  }
}
