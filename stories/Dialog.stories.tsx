import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, Dialog, Stack, Typography } from '../components'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

export const Template: ComponentStory<typeof Dialog> = args => (
  <ThemeTemplate
    component={
      <Dialog {...args} open={true}>
        <Stack gap="10px">
          <Typography variant="title">Title</Typography>
          <Typography variant="subtitle">Subtitle</Typography>
        </Stack>

        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <Button variant="contained">Button</Button>
      </Dialog>
    }
  />
)
