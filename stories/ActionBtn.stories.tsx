import CheckIcon from '@mui/icons-material/Check'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ActionBtn } from '../components'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Button/ActionBtn',
  component: ActionBtn,
} as ComponentMeta<typeof ActionBtn>

export const Template: ComponentStory<typeof ActionBtn> = args => (
  <ThemeTemplate component={<ActionBtn {...args} icon={<CheckIcon />} color="success" />} />
)
