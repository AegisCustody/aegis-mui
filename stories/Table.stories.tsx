import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Table } from '../components'
import { Config } from '../components/Table/Table'
import Page from './Page'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>

const configs: Config[] = [
  {
    header: 'Header 1',
    render: () => (
      <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</>
    ),
  },
  { header: 'Header 2', render: () => <>Header 2</> },
  { header: 'Header 3', render: () => <>Header 3</> },
  { header: 'Header 4' },
  { header: 'Header 5' },
  { header: 'Header 6' },
  { header: 'Header 7', render: () => <>Header 7</> },
  { header: 'Header 8', render: () => <>Header 8</> },
  { header: 'Header 9', render: () => <>Header 9</> },
]

export const Template: ComponentStory<typeof Table> = args => (
  <ThemeTemplate
    component={<Table {...args} configs={configs} list={[{}, {}, {}]} rowExpansion={Page} />}
  />
)
