import Box, { BoxProps } from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React from 'react'

interface Config {
  label: string
  component?: React.ComponentType
}

interface ListProps extends BoxProps {
  configs: Config[]
}

const StyledBox = styled(Box)({
  '.MuiListItem-root': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    gap: '20px',
    padding: '20px',
  },
})

const List: React.FC<ListProps> = ({ configs, ...props }) => {
  return (
    <StyledBox {...props}>
      {configs.map((config, index) => {
        const { label, component: Component } = config
        return (
          <ListItem divider key={index}>
            <Typography color="text.primary" fontWeight="900">
              {label}
            </Typography>
            <Box>{Component ? <Component /> : '--'}</Box>
          </ListItem>
        )
      })}
    </StyledBox>
  )
}

export default List
