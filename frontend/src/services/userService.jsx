import axios from 'axios'
import { VITE_APP_BACKEND_URL } from '../config'
const baseUrl = VITE_APP_BACKEND_URL + '/api/users'

const getAllUsers = async () => {
  const users = await axios.get(baseUrl)
  return users.data.filter((u) => u.username !== 'deleted')
}

export const validatePassword = (current, p1, p2) => {
  if (p1 !== p2) throw Error('new passwords do not match')
  if (p1.length < 8) throw Error('password must be at least 8 characters long')
  return true
}

export const changePassword = async (current, p1, p2, user) => {
  await axios.put(
    baseUrl + '/changepassword',
    { p1, p2, current },
    {
      headers: {
        Authorization: user.token,
      },
    }
  )
}

export default getAllUsers
