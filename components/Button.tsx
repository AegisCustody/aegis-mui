import MuiButton, { ButtonProps } from '@mui/material/Button'

const Button: React.FC<ButtonProps> = props => {
  return <MuiButton {...props} />
}

export type { ButtonProps }
export default Button
