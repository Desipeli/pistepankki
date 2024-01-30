import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Box } from '@mui/material'

export const Layout = () => (
  <Box display="flex" flexDirection={'column'} minHeight={'100vh'}>
    <Navbar />
    <Outlet />
  </Box>
)
