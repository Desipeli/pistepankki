import { useContext } from 'react'
import { MainContext } from '../Contexts/MainContext'

const Notification = () => {
  const { message } = useContext(MainContext)
  if (message === null) {
    return null
  }

  return <div className="notification">{message}</div>
}

export default Notification
