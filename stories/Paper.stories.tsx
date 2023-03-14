import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Paper } from '../components'
import Page from './Page'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>

export const Template: ComponentStory<typeof Paper> = args => (
  <ThemeTemplate
    component={
      <Paper {...args}>
        <Page />
      </Paper>
    }
  />
)
