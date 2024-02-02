import { createBrowserRouter } from 'react-router-dom'
import BrowseGames from './pages/Browse'
import Game from './pages/Game'
import LoginScreen from './pages/Login'
import { LogOut } from './pages/Login'
import Match from './pages/Match'
import Profile from './pages/Profile'
import { Layout } from './components/Layout'

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <BrowseGames />,
      },
      {
        path: '/browse',
        element: <BrowseGames />,
      },
      {
        path: '/game',
        element: <Game />,
      },
      {
        path: '/login',
        element: <LoginScreen />,
      },
      {
        path: '/newmatch',
        element: <Match />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/logout',
        element: <LogOut />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
