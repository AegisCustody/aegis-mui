import MuiDialog, { DialogProps } from '@mui/material/Dialog'
import MuiDialogContent from '@mui/material/DialogContent'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledDialogContent = styled(MuiDialogContent)(({ theme }) => ({
  display: 'grid',
  gap: '30px',
  padding: '60px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '30px',
  },
}))

const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
  return (
    <MuiDialog fullWidth {...props}>
      <StyledDialogContent>{children}</StyledDialogContent>
    </MuiDialog>
  )
}

export default Dialog
