import type { ButtonProps } from '@mui/material/Button'
import MuiButton from '@mui/material/Button'

const Button: React.FC<ButtonProps> = props => {
  return <MuiButton {...props} />
}

export type { ButtonProps }
export default Button
