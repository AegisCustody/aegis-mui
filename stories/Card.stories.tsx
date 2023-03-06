import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Card, Stack, Typography } from '../components'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>

export const Template: ComponentStory<typeof Card> = args => (
  <ThemeTemplate
    component={
      <Card {...args}>
        <Stack gap="10px">
          <Typography variant="title">Title</Typography>
          <Typography variant="subtitle">Subtitle</Typography>
        </Stack>
      </Card>
    }
  />
)
