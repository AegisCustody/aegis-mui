import MuiDialog, { DialogProps } from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { styled } from '@mui/system'
import React from 'react'

const MuiDialogContent = styled(DialogContent)(({ theme }) => ({
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
      <MuiDialogContent>{children}</MuiDialogContent>
    </MuiDialog>
  )
}

export default Dialog
