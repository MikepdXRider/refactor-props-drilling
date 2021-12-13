import { useEffect, useState } from 'react'
import Profile from '../../components/Profile/Profile'
import { useUser } from '../../context/UserContext'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const {userObj} = useUser({});
  const { name } = userObj;

  useEffect(() => {
    if (name) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [name])

  if (loading) return <h1>Loading...</h1>
  return <Profile/>
}

export default Home
