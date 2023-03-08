import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Alert } from '../components'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>

export const Template: ComponentStory<typeof Alert> = args => (
  <ThemeTemplate
    component={
      <Alert {...args}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
        suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Alert>
    }
  />
)
