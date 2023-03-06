import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TooltipIcon } from '../components'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'ToolTipIcon',
  component: TooltipIcon,
} as ComponentMeta<typeof TooltipIcon>

export const Template: ComponentStory<typeof TooltipIcon> = args => (
  <ThemeTemplate
    component={<TooltipIcon {...args} icon={HelpOutlineIcon} title="Tooltip Icon" />}
  />
)
