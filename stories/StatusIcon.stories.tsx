import CheckIcon from '@mui/icons-material/Check'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StatusIcon } from '../components'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Icon/StatusIcon',
  component: StatusIcon,
} as ComponentMeta<typeof StatusIcon>

export const Template: ComponentStory<typeof StatusIcon> = args => (
  <ThemeTemplate component={<StatusIcon {...args} icon={<CheckIcon color="success" />} />} />
)
