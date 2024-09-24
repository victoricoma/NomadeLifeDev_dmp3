import React from 'react'
import styles from './Login.module.css'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { login, error:authError, loading } = useAuthentication()
    const navigate = useNavigate()

    const handlerSubmit = async(e) =>{
        e.preventDefault()
        setError('')
        const user = {
            email,
            password
        }

        const res = await login(user)

        console.table(res)
        navigate("/post/create")
    }

    useEffect(() =>{
        if(authError){
            setError(authError)
        }
    }, [authError])

  return (
    <div className={styles.login}>
        <h1>Entrar no Nomade Life</h1>
        <p>Entre no ambiente e compartilhe suas experiências</p>
        <form onSubmit={handlerSubmit}>
            <label>
                <span>E-mail:</span>
                <input 
                type='email'
                name='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Entre com seu e-mail'
                ></input>
            </label>
            <label>
                <span>Senha:</span>
                <input
                type='password'
                name='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Entre com sua senha'
                ></input>
            </label>
            {!loading && <button className='btn'>Login</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Login