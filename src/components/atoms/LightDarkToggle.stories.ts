import type { Meta, StoryObj } from '@storybook/vue3'
import LightDarkToggle from './LightDarkToggle.vue'

const meta: Meta<typeof LightDarkToggle> = {
  component: LightDarkToggle,
}
export default meta

type Story = StoryObj<typeof LightDarkToggle>

export const Primary: Story = {
  args: {},
}
