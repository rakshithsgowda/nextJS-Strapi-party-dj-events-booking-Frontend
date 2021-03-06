const { useRouter } = require('next/router')
const { useContext, useState, useEffect, createContext } = require('react')
const { API_URL, NEXT_URL } = require('../config')

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  // Register user
  const register = async (user) => {
    console.log(user)
  }

  // Login user
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:
        JSON >
        stringify({
          identifier,
          password,
        }),
    })
    const data = await res.json()
    if (res.ok) {
      console.log(`login res ok => ${data}`)
    } else {
      //
    }
  }

  // Logout user
  const logout = async (user) => {
    console.log('logout')
  }

  // check if user is logged in

  const checkUserLoggedIn = async (user) => {
    console.log('Check')
  }
  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
