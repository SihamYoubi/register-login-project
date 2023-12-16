import {useContext} from 'react'
import { UserContext } from '../context/UserContext'
const Dashboard = () => {
    const {user} = useContext(UserContext)
    console.log(user)
  return (
    <div>

          {!!user && <h4>Hello- {user.name}</h4> }
    </div>
  )
}

export default Dashboard
