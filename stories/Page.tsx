import CheckIcon from '@mui/icons-material/Check'
import { Divider, Stack, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ActionBtn, Button } from '../components'

const palettes: any[] = [
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
  'tertiary',
  'reject',
  'stroke',
  'menu',
]

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false)

  return (
    <Stack gap="8px">
      <Typography variant="title">Typography</Typography>
      <Divider />

      <Typography variant="h1">h1.Heading</Typography>
      <Typography variant="body1">
        body1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
        suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2">
        body2.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
        suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="link">link.TEXT</Typography>
      <Typography variant="hint">hint.TEXT</Typography>
      <Typography variant="title">title.TEXT</Typography>
      <Typography variant="subtitle">
        subtitle.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="menuType">menuType.TEXT</Typography>
      <Typography variant="menuItem">menuItem.TEXT</Typography>

      <Typography variant="title">
        Button
        <Switch onClick={() => setLoading(!loading)} />
      </Typography>
      <Divider />

      <Stack direction="row" gap="8px">
        {palettes.map(palette => (
          <Button key={palette} color={palette} loading={loading} variant="contained">
            {palette}
          </Button>
        ))}
      </Stack>

      <Stack direction="row" gap="8px">
        {palettes.map(palette => (
          <Button key={palette} color={palette} loading={loading} variant="outlined">
            {palette}
          </Button>
        ))}
      </Stack>

      <Stack direction="row" gap="8px">
        {palettes.map(palette => (
          <Button key={palette} color={palette} loading={loading} variant="text">
            {palette}
          </Button>
        ))}
      </Stack>

      <Typography variant="title">Action Button</Typography>
      <Divider />

      <Stack direction="row" gap="8px">
        {palettes.map(palette => (
          <ActionBtn key={palette} color={palette} icon={<CheckIcon />} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Page
