import MuiDialog, { DialogProps } from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import React from 'react'

const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
  return (
    <MuiDialog fullWidth {...props}>
      <DialogContent>{children}</DialogContent>
    </MuiDialog>
  )
}

export default Dialog
