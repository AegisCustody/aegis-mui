import { ComponentMeta, ComponentStory } from '@storybook/react'
import Page from './Page'

export default {
  title: 'Page',
  component: Page,
} as ComponentMeta<typeof Page>

export const Template: ComponentStory<typeof Page> = args => <Page {...args} />
