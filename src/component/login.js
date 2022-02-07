import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    const changeMail = (e) => {
      this.setState({
        username: e.target.value,
      });
    };
    const changePassword = (e) => {
      this.setState({
        password: e.target.value,
      });
    };
    const submitLogin = (event) => {
      event.preventDefault();
      axios
        .post(
          "https://forwardapi.auctionsoftware.com/mobileapi/login",
          this.state,
          {
            headers: {
              key: "Content-Type",
              value: "multipart/form-data",
              enabled: true,
            },
          }
        )
        .then(() => {
          console.log("Login success");
        })
        .catch(() => {
          console.log("Login failed");
        });
    };
    return (
      <div className="login-body">
        <div className="container-login">
          <div className="login">
            <h1>Patrick Conboy</h1>
            <p className="login-text">LOGIN</p>
            <p className="login-desc">
              Aloha, welcome to Hawai'i Auction Services
            </p>
            <p className="login-desc">Continue logging into your account.</p>
            <form
              className="login-form"
              onSubmit={(e) => {
                submitLogin(e);
              }}
            >
              <div className="input-field">
                <label className="input-lable">Email Address</label>
                <br />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) => changeMail(e)}
                  required
                />
              </div>
              <div className="input-field">
                <label className="input-lable">Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  onChange={(e) => changePassword(e)}
                  required
                />
              </div>
              <div className="remember-container">
                <div>
                  <input type="checkbox" id="remember" name="remember" />
                  <label
                    className="input-lable"
                    for="remember"
                    style={{ fontSize: "14px", paddingLeft: "10px" }}
                  >
                    {" "}
                    Remember me
                  </label>
                </div>
                <a href="#" style={{ color: "#000000", fontWeight: 400 }}>
                  Forget Password?
                </a>
              </div>
              <div className="submit-button">
                <input type="submit" value="LOGIN" />
              </div>
            </form>
            <p>Don't have an account?</p>
            <p style={{ paddingBottom: "30px" }}>
              Register <Link to="/sign-up">here</Link>
            </p>
          </div>
        </div>
        <p style={{ color: "#fff", textAlign: "center" }}>
          &copy; 2020 Patrick Conboy. All rights reserved.
        </p>
      </div>
    );
  }
}

export default Login;
