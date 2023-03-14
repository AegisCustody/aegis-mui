import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
  padding: '20px',
  borderRadius: '6px',
  backgroundColor: theme.palette.background.default,
}))

const Alert: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>
}

export default Alert
