import { useEffect, useState } from 'react'
import Profile from '../../components/Profile/Profile'

const Home = ({ user }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user.name) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [user])

  if (loading) return <h1>Loading...</h1>
  return <Profile user={user} />
}

export default Home
