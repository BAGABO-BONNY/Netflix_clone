import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const navigate = useNavigate();

 useEffect(()=>{
  onAuthStateChanged(auth, async(user)=>{
    if(user){
      console.log("logged in");
       navigate('/')
    } else{
      console.log("logged out")
      navigate('/login')
    }
  })
 },[])

  return (
    <div>
      <ToastContainer theme='dark'/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/player/:id' element={< Player/>}/>
        </Routes>
      
    </div>
  )
}

export default App