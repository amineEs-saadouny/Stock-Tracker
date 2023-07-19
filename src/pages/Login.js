import react from "react";
import "../CSS/Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="left-side">
        <h1>Login Form</h1>
      </div>
      <form className="login-form">
        <label for="userName">
          User Name:
          <br />
          <input className="login-input" type="text" name="userName" />
        </label>
        <label for="password">
          Password:
          <br />
          <input className="login-input" type="password" name="password" />
        </label>

        <input className="login-submit" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
