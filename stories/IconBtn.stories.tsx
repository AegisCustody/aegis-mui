import CheckIcon from '@mui/icons-material/Check'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconBtn } from '../components'
import ThemeTemplate from './ThemeTemplate'

export default {
  title: 'Button/IconBtn',
  component: IconBtn,
} as ComponentMeta<typeof IconBtn>

export const Template: ComponentStory<typeof IconBtn> = args => (
  <ThemeTemplate
    component={
      <IconBtn {...args}>
        <CheckIcon />
      </IconBtn>
    }
  />
)
