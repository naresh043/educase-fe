import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import ProfileCard from './pages/ProfileCard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<ProfileCard />} />
    </Routes>
  )
}

export default App
