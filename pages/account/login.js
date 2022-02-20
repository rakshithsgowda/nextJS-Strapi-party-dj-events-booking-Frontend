import Layout from '@/components/Layout'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'
import styles from '@/styles/AuthForm.module.css'
import 'react-toastify/dist/ReactToastify.css'
import AuthContext from '@/context/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, error } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({ email, password })
  }

  return (
    <div>
      <Layout title='User Login'>
        <div className={styles.auth}>
          <h1>
            <FaUser /> Log-IN
          </h1>
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='password'>Password </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type='submit' value='login' className='btn' />
          </form>
          <p>
            dont have an account?
            <Link href='/account/register'>Register</Link>
          </p>
        </div>
      </Layout>
    </div>
  )
}
