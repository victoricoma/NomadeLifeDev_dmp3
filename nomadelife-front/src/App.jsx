import "./App.css"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"

// hooks
import { useState, useEffect } from "react"
import { useAuthentication } from "./hooks/useAuthentication"

// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

// components
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import CreatePost from "./pages/CreatePost/CreatePost"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Dashboard from "./pages/Dashboard/Dashboard"

// context
import { AuthProvider } from "./context/AuthContext"

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }
  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/post/create' element={<CreatePost />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
