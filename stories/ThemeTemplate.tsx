import { ThemeProvider } from '@emotion/react'
import React from 'react'
import theme from '../theme'

interface TemplateProps {
  component: React.ReactNode
}

const ThemeTemplate: React.FC<TemplateProps> = ({ component }) => {
  return <ThemeProvider theme={theme}>{component}</ThemeProvider>
}

export default ThemeTemplate
