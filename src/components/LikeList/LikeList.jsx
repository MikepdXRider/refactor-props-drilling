import { useUser } from '../../context/UserContext'
import Like from './Like'


export default function LikeList() {
  const {userObj, setUserObj} = useUser();
  const {likes} = userObj
  
  return (
    <>
      <h2 className="text-center text-xl">Interests</h2>
      <ul className="mt-2 pt-3 flex flex-wrap mx-6 border-t">
        {likes.map((like) => {
          return (
            <li key={like}>
              <Like like={like} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
