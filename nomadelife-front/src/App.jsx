import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {
  return (
    <>
      <NavBar />
      <CreatePost />
      <Footer />
    </>
  )
}

export default App
