import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ActionBar, Button } from '../components'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'ActionBar',
  component: ActionBar,
} as ComponentMeta<typeof ActionBar>

export const Template: ComponentStory<typeof ActionBar> = args => (
  <ThemeTemplate
    component={
      <ActionBar {...args}>
        <ActionBar>
          <Button variant="contained">Left</Button>
          <Button variant="outlined">Left</Button>
          <Button variant="outlined">Right</Button>
        </ActionBar>
        <Button variant="contained">Right</Button>
      </ActionBar>
    }
  />
)
