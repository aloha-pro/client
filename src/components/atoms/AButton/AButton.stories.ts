import type {Meta, StoryObj} from '@storybook/react'

import {AButton} from './AButton'

const meta = {
  title: 'Atoms/AButton',
  component: AButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary',
    border: 'square',
    size: 'small',
  },
}

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary',
    border: 'square',
    size: 'small',
  },
}

export const Big: Story = {
  args: {
    primary: true,
    label: 'Big',
    border: 'round',
    size: 'big',
  },
}
