import type { Meta, StoryObj } from '@storybook/vue3'
import WallsCollector from './WallsCollector.vue'
import { ref } from 'vue'
import type { Wall } from '@/types/walls'
import { defaultWall } from '@/defaults'

const meta: Meta<typeof WallsCollector> = {
  component: WallsCollector,
}
export default meta
type Story = StoryObj<typeof meta>

const render = (args: any) => ({
  components: { WallsCollector },
  setup() {
    const walls = ref<Wall[]>([{ ...defaultWall }])
    return { args, walls }
  },
  template: `<WallsCollector v-bind="args" v-model="walls"/>`,
})

export const Default: Story = {
  render: render,
  args: {},
}
