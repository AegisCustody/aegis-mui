import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../components'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button</Button>

export const Contained = Template.bind({})
Contained.args = {
  variant: 'contained',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
}

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
}
