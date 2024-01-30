import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import LoginScreen from './pages/login'
import Match from './pages/match'
import { LogOut } from './pages/login'

import Notification from './components/Notification'
import BrowseGames from './pages/browse'
import Game from './pages/game'
import Profile from './pages/profile'

import { ThemeContext } from './Contexts/ThemeContext'

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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Notification message={message} />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <LoginScreen
                  user={user}
                  setUser={setUser}
                  setTimedMessage={setTimedMessage}
                />
              }
            />
            <Route path="/logout" element={<LogOut />} />
            <Route
              path="/newmatch"
              element={<Match setTimedMessage={setTimedMessage} user={user} />}
            />
            <Route
              path="/browse"
              element={<BrowseGames setTimedMessage={setTimedMessage} />}
            />
            <Route
              path="/game/:id"
              element={<Game setTimedMessage={setTimedMessage} user={user} />}
            />
            <Route
              path="/profile"
              element={
                <Profile setTimedMessage={setTimedMessage} user={user} />
              }
            />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
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
