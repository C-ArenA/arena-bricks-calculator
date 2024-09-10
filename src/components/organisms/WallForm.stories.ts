import type { Meta, StoryObj } from '@storybook/vue3'
import WallForm from './WallForm.vue'
import { ref } from 'vue'
import { MeasurementOption, type Wall } from '@/types/walls'

const meta: Meta<typeof WallForm> = {
  component: WallForm,
}

export default meta

type Story = StoryObj<typeof WallForm>

const render = (args: any) => ({
  components: { WallForm },
  setup() {
    const wall = ref<Wall>({
      width: 0,
      height: 0,
      area: 0,
      measurementOption: MeasurementOption.Dimensions,
    })
    return { args, wall }
  },
  template: `<WallForm v-bind="args" v-model="wall" />`,
})

export const Default: Story = {
  render: render,
  args: {
    wallId: '1',
  },
}
