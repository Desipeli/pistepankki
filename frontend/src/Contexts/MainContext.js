import { createContext } from 'react'

export const MainContext = createContext({
  theme: 'light',
  setTheme: () => {},
  user: 'null',
  setUser: () => {},
  message: '',
  setMessage: () => {},
  currentMessageTimeout: 0,
  setCurrentMessageTimeout: () => {},
  setTimedMessage: () => {},
})
