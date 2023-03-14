import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import React, { useState } from 'react'

interface Config {
  label: string
  render?: React.ComponentType
}

interface TabsProps {
  configs: Config[]
  variant?: 'outlined'
}

const StyledTabList = styled(TabList)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.stroke.main}`,
  '.MuiTab-root': {
    color: theme.palette.menu.main,
  },
  '&.outlined': {
    minHeight: 'auto',
    borderBottom: 'none',
    '.MuiTab-root': {
      minHeight: '36px',
      padding: 0,
      color: theme.palette.tertiary.main,
      border: `1px solid ${theme.palette.tertiary.main}`,
      borderRadius: '100px',
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: theme.palette.tertiary.main,
      },
    },
    '.MuiTabs-indicator': {
      display: 'none',
    },
    '.MuiTabs-flexContainer': {
      gap: '5px',
    },
  },
}))

const StyledTabPanel = styled(TabPanel)({
  padding: '30px 0',
})

const Tabs: React.FC<TabsProps> = ({ configs, variant }) => {
  const [value, setValue] = useState('0')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <StyledTabList variant="scrollable" className={variant} onChange={handleChange}>
        {configs.map((config, index) => (
          <Tab key={index} value={index.toString()} label={config.label} />
        ))}
      </StyledTabList>

      {configs.map((config, index) => {
        const { render: Component } = config
        return (
          <StyledTabPanel key={index} value={index.toString()}>
            {Component && <Component />}
          </StyledTabPanel>
        )
      })}
    </TabContext>
  )
}

export type { Config }
export default Tabs
