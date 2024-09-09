import type { Meta, StoryObj } from '@storybook/vue3'
import WallForm from './WallForm.vue'

const meta: Meta<typeof WallForm> = {
  component: WallForm
}

export default meta

type Story = StoryObj<typeof WallForm>

export const Default: Story = {
  args: {}
}
