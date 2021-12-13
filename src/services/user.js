import { client, parseData } from './client'

export const fetchUser = async () => {
  const userData = await client.from('users').select()
  return parseData(userData)
}

export default { fetchUser }
