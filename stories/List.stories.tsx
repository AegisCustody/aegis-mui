import { Stack, Typography } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, Dialog, List } from '../components'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>

const configs = [
  {
    label: 'Label 1',
    component: () => <Typography>Label 1</Typography>,
  },
  {
    label: 'Label 2',
    component: () => (
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
        suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    ),
  },
  {
    label: 'Label 3',
    component: () => (
      <Stack direction="row" gap="20px">
        <Button variant="outlined">Label 3</Button>
        <Button variant="contained">Label 3</Button>
        <Button variant="text">Label 3</Button>
      </Stack>
    ),
  },
  { label: 'Label 4' },
  { label: 'Label 5' },
  { label: 'Label 6' },
  { label: 'Label 7', component: () => <Typography>Label 7</Typography> },
  { label: 'Label 8', component: () => <Typography>Label 8</Typography> },
  { label: 'Label 9', component: () => <Typography>Label 9</Typography> },
]

export const Template: ComponentStory<typeof List> = args => (
  <ThemeTemplate
    component={
      <Dialog open={true}>
        <List {...args} configs={configs} />
      </Dialog>
    }
  />
)
