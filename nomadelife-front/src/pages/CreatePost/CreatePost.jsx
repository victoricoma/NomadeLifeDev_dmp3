import styles from './CreatePost.module.css'
import { useInsertDocument } from "../../hooks/useInsertDocument"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from '../../context/AuthContext'
import { useState } from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  const { user } = useAuthValue()
  const navigate = useNavigate()

  const { insertDocument, response } = useInsertDocument("post")

  const handlerSubmit = (e) => {
    e.preventDefault()
    setFormError("");

    try{
      new URL(image)
    }catch(error){
      setFormError("A imagem precisa ser uma URL.")
    }

    const tagsArray = tags.split(',').map((tag) =>tag.trim().toLowerCase())

    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos do formulário do post.")
    }

    console.log(tagsArray)

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createBy: user.displayName
    })

    if(setFormError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createBy: user.displayName
    })

    navigate('/')
  }
  
  return (
    <>
    </>
  )
}

export default CreatePost