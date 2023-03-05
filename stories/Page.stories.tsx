import { ComponentMeta, ComponentStory } from '@storybook/react'
import Page from './Page'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Page',
  component: Page,
} as ComponentMeta<typeof Page>

export const Template: ComponentStory<typeof Page> = args => (
  <ThemeTemplate component={<Page {...args} />} />
)
