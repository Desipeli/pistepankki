import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import LoginScreen from './pages/Login'
import Match from './pages/Match'
import { LogOut } from './pages/Login'

import Notification from './components/Notification'
import BrowseGames from './pages/Browse'
import Game from './pages/Game'
import Profile from './pages/Profile'

import { MainContext } from './Contexts/MainContext'

const App = () => {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [currentMessageTimeout, setCurrentMessageTimeout] = useState(null)
  const [theme, setTheme] = useState('light')

  const setTimedMessage = (mess, timeout) => {
    if (currentMessageTimeout) {
      clearTimeout(currentMessageTimeout)
    }
    setMessage(mess)
    const timeId = setTimeout(() => {
      setMessage(null)
    }, timeout)
    setCurrentMessageTimeout(timeId)
  }

  // Check if user logged in
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
    const theme = window.localStorage.getItem('theme')
    if (theme) {
      document.documentElement.className = theme
      setTheme(theme)
    }
  }, [])

  return (
    <MainContext.Provider
      value={{
        theme,
        setTheme,
        user,
        setUser,
        message,
        setMessage,
        currentMessageTimeout,
        setCurrentMessageTimeout,
        setTimedMessage,
      }}
    >
      <div className="App">
        <Navbar />
        <Notification />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/newmatch" element={<Match />} />
            <Route path="/browse" element={<BrowseGames />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </MainContext.Provider>
  )
}

const Home = () => {
  useEffect(() => {
    document.title = 'Pistepankki'
  }, [])

  return (
    <div>
      <p></p>
    </div>
  )
}

export default App
