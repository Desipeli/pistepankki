import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Box } from '@mui/material'

export const Layout = () => (
  <Box>
    <Navbar />
    <Outlet />
  </Box>
)
