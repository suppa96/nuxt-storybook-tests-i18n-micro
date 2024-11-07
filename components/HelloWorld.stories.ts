import type { Meta, StoryObj } from '@storybook/vue3'
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
