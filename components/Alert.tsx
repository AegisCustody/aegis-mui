import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
  padding: '20px',
  borderRadius: '6px',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.default,
}))

const Alert: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <StyledBox {...props}>
      <Typography variant="hint">{children}</Typography>
    </StyledBox>
  )
}

export default Alert
