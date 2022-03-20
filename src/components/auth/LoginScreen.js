import React from 'react'

export const LoginScreen = () => {
  return (
    <>
        <h1>Login</h1>

        <form>

          <input 
            type="text"
            placeholder="email"
            name="email"
          />

          <input 
            type="password"
            placeholder="password"
            name="password"
          />

          <button
            type="submit"
          >
            Login
          </button>

          <hr />
          google
        </form>
    </>
  )
}
