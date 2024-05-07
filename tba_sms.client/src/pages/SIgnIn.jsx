import  { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    const url = "https://localhost:7067/api/User/Login";
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        // Handle successful login, such as setting user authentication state
      })
      .catch((error) => {
        console.error("Login error:", error);
        // Handle login error, such as displaying an error message to the user
      });
  };

  return (
    <>
      <div className="row">
        <div className="col"></div>
        <form
          onSubmit={handleSubmit}
          className="border rounded p-5 my-4 shadow-lg col-lg-6 col-md-8"
        >
          <div className="text-center"></div>

          <div className="form-group">
            <label className="mt-4" htmlFor="email">
              Enter your Email:
            </label>
            <input
              type="email"
              className="form-control text-muted"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="mt-4" htmlFor="password">
              Enter your Password:
            </label>
            <input
              type="password"
              className="form-control text-muted"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-sm rounded-pill px-5 py-2 my-5 text-uppercase"
          >
            Sign In
          </button>

          <div className="text-end">
            <Link to="/forgetpassword">Forget Password</Link>
            <Link to="/signup" className="mx-4">
              Sign Up
            </Link>
          </div>
        </form>
        <div className="col"></div>
      </div>
    </>
  );
};

export default SignIn;
