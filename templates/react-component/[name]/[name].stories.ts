import type { Meta, StoryObj } from "@storybook/react"

import { {{ name | pascal_case }} } from "./{{ name | pascal_case }}"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/{{ name | pascal_case }}",
  component: {{ name | pascal_case }},
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof {{ name | pascal_case }}>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "{{ name | pascal_case }}",
  },
}

export const Secondary: Story = {
  args: {
    label: "{{ name | pascal_case }}",
  },
}

export const Large: Story = {
  args: {
    size: "large",
    label: "{{ name | pascal_case }}",
  },
}

export const Small: Story = {
  args: {
    size: "small",
    label: "{{ name | pascal_case }}",
  },
}
