import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../components'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Template: ComponentStory<typeof Button> = args => (
  <ThemeTemplate component={<Button {...args}>Button</Button>} />
)
