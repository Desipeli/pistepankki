import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import { MainContext } from './Contexts/MainContext'
import { router } from './Router'

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
      <RouterProvider router={router} />
    </MainContext.Provider>
  )
}

export default App
