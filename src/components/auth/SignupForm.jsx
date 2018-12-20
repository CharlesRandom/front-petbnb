import React from 'react'

const SignupForm = ({signup, handleText}) => {
  return (
    <div>
      SignUp
      <form method="POST" onSubmit={signup}>
        <p>
          Name:
          <input type="text" name="name" onChange={handleText} placeholder="Name..."/>
        </p>
        <p>
          Email:
          <input type="email" name="email" onChange={handleText} placeholder="Email..."/>
        </p>
        <p>
          Password:
          <input type="password" name="password" onChange={handleText} placeholder="Password..."/>
        </p>
        <button type="submit">Regístrate</button>
      </form>
    </div>
  )
}

export default SignupForm
