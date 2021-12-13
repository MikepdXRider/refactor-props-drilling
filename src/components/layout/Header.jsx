import logo from '../../assets/meet.png'
import { useUser } from '../../context/UserContext'
import './Header.css'
// import custom hook here

// Once all other comments are satisfied, we can remove this user from 
const Header = () => {
  // declare and destructure the userUser hook.
  const {userObj} = useUser({});
  const { name, color } = userObj;

  return (
    <header>
      <img src={logo} className="app-logo" alt="Alchemy Logo" />
      <p>
        Meet <span style={{ color: `${color}` }}>{name}</span>!
      </p>
    </header>
  )
}

export default Header
