import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import appSetup from '../src/appSetup'

setup((app) => appSetup(app))

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
