import type { Meta, StoryObj } from "@storybook/vue3";

import i18nTestComponent from "./i18nTestComponent.vue";

const meta = {
  title: "Example/i18nTestComponent",
  component: i18nTestComponent,
} satisfies Meta<typeof i18nTestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { i18nTestComponent },
    template: "<i18nTestComponent />",
  }),
  args: {},
};
