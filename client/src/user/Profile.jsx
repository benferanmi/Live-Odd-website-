import { Link } from "react-router-dom"
import { useAuth } from "../contexts/useAuth"
import './profile.css'
const Profile = () => {
  const { userData, logout } = useAuth()
  console.log(userData)

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>    <div className="profile-page">
      <h1>Profile</h1>
      <h2>{userData.name}</h2>

      <h4>{userData.email}</h4>


      <p>{userData.role}</p>
      <Link to='/payment' style={{color: 'white', padding: '15px 40px', borderRadius: '5px', border: '2px solid white'}} >Make a Payment</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
    </>

  )
}

export default Profile