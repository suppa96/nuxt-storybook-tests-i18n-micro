import type { Meta, StoryObj } from '@storybook/vue3'

import MyNuxtWelcome from './MyWelcome.vue'

const meta = {
  title: 'Example/NuxtWelcome',
  component: MyNuxtWelcome,
} satisfies Meta<typeof MyNuxtWelcome>

export default meta
type Story = StoryObj<typeof meta>

export const NuxtWelcomeStory: Story = {
  args: {},
}
