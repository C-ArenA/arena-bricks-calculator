import type { Meta, StoryObj } from '@storybook/vue3'
import BrickSelect from './BrickSelect.vue'
import { ref } from 'vue'
import type { Brick } from '@/types/materials'

const meta: Meta<typeof BrickSelect> = {
  component: BrickSelect,
}
export default meta
type Story = StoryObj<typeof meta>

const render = (args: any) => ({
  components: { BrickSelect },
  setup() {
    const brick = ref<Brick>()
    return { args: args, brick }
  },
  template: `<BrickSelect v-bind="args" v-model="brick"/>`,
})

export const Default: Story = {
  render: render,
  args: {},
}
