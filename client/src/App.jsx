import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Login from './registration/Login'
import Signup from './registration/Signup'
import RegistrationLayout from './registration/RegistrationLayout'
import { useAuth } from './contexts/useAuth'
import Profile from './user/Profile'
import EuroOdd from './EuroOdd'
import PaymentPage from './PaymentPage'

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="auth" element={<RegistrationLayout />}>
        <Route path="login" key="login" element={isAuthenticated ? <Navigate to='/' /> : <Login />} />
        <Route path="signup" key="signup" element={<Signup />} />
      </Route>
      <Route path='profile' element={!isAuthenticated ? <Login /> : <Profile />}></Route>
      <Route path='payment' element={!isAuthenticated ? <Login /> : <PaymentPage />}></Route>
      <Route path="euro" element={<EuroOdd />}></Route>
    </Routes>
  )
}
export default App