import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within, expect } from '@storybook/test'

import HelloWorld from './HelloWorld.vue'
import type { HelloWorldProps } from './HelloWorld.props'

const meta = {
  title: 'Example/HelloWorld',
  component: HelloWorld,
} satisfies Meta<typeof HelloWorld>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: HelloWorldProps) => ({
  components: { HelloWorld },
  setup() {
    return {
      args,
    }
  },
  template: '<HelloWorld v-bind="args" />',
})

export const Default: Story = {
  render: (args) => Template(args),
  args: {
    msg: 'Hello World',
  },
}

export const Submitted: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com')

    await userEvent.type(canvas.getByTestId('password'), 'a-random-password')

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'))

    // 👇 Assert DOM structure
    await expect(canvas.getByText('Everything is perfect. Your account is ready and we should probably get you started!')).toBeInTheDocument()
  },
}
