function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form action="">
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
           
            <button>Sign In</button>
            <p>Not have an account? Sign Up</p>
        </form>
      </div>
    </div>
  )
}

export default Login