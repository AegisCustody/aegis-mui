import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../components'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button</Button>
