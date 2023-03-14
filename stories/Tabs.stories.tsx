import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tabs } from '../components'
import { Config } from '../components/Tabs'
import Page from './Page'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const configs: Config[] = [
  { label: 'Tab 1', render: Page },
  { label: 'Tab 2', render: () => <Tabs configs={configs} variant="outlined" /> },
  { label: 'Tab 3', render: () => <Tabs configs={configs} variant={undefined} /> },
  { label: 'Tab 4', render: () => <>Tab 4</> },
  { label: 'Tab 5', render: () => <>Tab 5</> },
  { label: 'Tab 6', render: () => <>Tab 6</> },
  { label: 'Tab 7', render: () => <>Tab 7</> },
  { label: 'Tab 8', render: () => <>Tab 8</> },
  { label: 'Tab 9', render: () => <>Tab 9</> },
]

export const Template: ComponentStory<typeof Tabs> = args => (
  <ThemeTemplate component={<Tabs {...args} configs={configs} variant={undefined} />} />
)
