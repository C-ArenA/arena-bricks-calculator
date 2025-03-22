import type { Meta, StoryObj } from '@storybook/vue3'
import QuotationForm from './QuotationForm.vue'

const meta: Meta<typeof QuotationForm> = {
  component: QuotationForm,
}
export default meta
type Story = StoryObj<typeof QuotationForm>

export const Default: Story = {
  args: {},
}
