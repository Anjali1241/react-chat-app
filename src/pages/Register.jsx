function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form action="">
            <input type="text" placeholder="display name"></input>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <input type="file" id='file' className="fileSelection"/>
            <label htmlFor="file"><img src="" alt=""  />
            <span>Add an avatar</span></label>
            <button>Sign Up</button>
            <p>Have an account? Login</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
