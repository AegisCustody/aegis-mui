import React from 'react'
import ThemeProvider from '../theme'

interface TemplateProps {
  component: React.ReactNode
}

const ThemeTemplate: React.FC<TemplateProps> = ({ component }) => {
  return <ThemeProvider>{component}</ThemeProvider>
}

export default ThemeTemplate
