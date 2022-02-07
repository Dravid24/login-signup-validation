import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Sigin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      userPhone: "",
      country: "",
      city: "",
      state: "",
      strt_address: "",
      strt_address2: "",
      zip: "",
      password: "",
      confirmpassword: "",
    };
  }

  render() {
    const submitRegistration = (event) => {
      event.preventDefault();
      axios
        .post(
          "https://forwardapi.auctionsoftware.com/mobileapi/register",
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
          console.log("Registration success");
        })
        .catch(() => {
          console.log("Registration failed");
        });
    };
    return (
      <div className="signup-body">
        <div className="container-login">
          <div className="signup">
            <h1>Patrick Conboy</h1>
            <p className="login-text">REGISTRATION</p>
            <p className="login-desc">
              Aloha, welcome to Hawai'i Auction Services
            </p>
            <p className="login-desc">
              Create and account today and benefit with the best services.
            </p>
            <p className="login-desc" style={{ paddingTop: "30px" }}>
              Personal details
            </p>
            <form
              className="login-form"
              onSubmit={(e) => submitRegistration(e)}
            >
              <div className="signup-form">
                <div className="input-field">
                  <label className="input-lable">First Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    onChange={(e) =>
                      this.setState({
                        firstName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="input-field">
                  <label className="input-lable">Last Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    required
                    onChange={(e) =>
                      this.setState({
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <label className="input-lable">Business Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your business name"
                    required
                    onChange={(e) =>
                      this.setState({
                        userName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <label className="input-lable">Email Address</label>
                  <br />
                  <input
                    type="mail"
                    placeholder="Enter your email address"
                    required
                    onChange={(e) =>
                      this.setState({
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <label className="input-lable">Phone Number</label>
                  <br />
                  <input
                    type="number"
                    placeholder="Enter your Phone number"
                    required
                    onChange={(e) =>
                      this.setState({
                        userPhone: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <label className="input-lable">Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    onChange={(e) =>
                      this.setState({
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <label className="input-lable">Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your confirm password"
                    required
                    onChange={(e) =>
                      this.setState({
                        confirmpassword: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <label for="country">Country</label>
                  <br />
                  <select
                    name="country"
                    id="country"
                    onChange={(e) =>
                      this.setState({
                        country: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled selected>
                      select your country
                    </option>
                    <option value="india">India</option>
                  </select>
                </div>
                <div className="input-field">
                  <label for="State">State</label>
                  <br />
                  <select
                    name="State"
                    id="State"
                    onChange={(e) =>
                      this.setState({
                        state: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled selected>
                      select your state
                    </option>
                    <option value="chennai">Chennai</option>
                    <option value="vellore">Vellore</option>
                    <option value="ranipet">Ranipet</option>
                  </select>
                </div>
                <div className="input-field">
                  <label for="City">City</label>
                  <br />
                  <select
                    name="City"
                    id="City"
                    onChange={(e) =>
                      this.setState({
                        city: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled selected>
                      select your city
                    </option>
                    <option value="arcot">Arcot</option>
                    <option value="walaja">Walaja</option>
                  </select>
                </div>
                <div className="input-field">
                  <label className="input-lable">Address Line-1</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your address line-1"
                    required
                    onChange={(e) =>
                      this.setState({
                        strt_address: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <label className="input-lable">Address Line-2</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your address line-2"
                    required
                    onChange={(e) =>
                      this.setState({
                        strt_address2: e.target.value,
                      })
                    }
                  />
                </div>
                <div style={{ width: "47.9%", marginRight: "20px" }}>
                  <div className="input-field">
                    <label className="input-lable">Zip code</label>
                    <br />
                    <input
                      type="number"
                      placeholder="Enter your zip code"
                      required
                      onChange={(e) =>
                        this.setState({
                          zip: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="download-container">
                  <div>
                    <label className="input-lable">GE Tax-exempt form</label>
                    <br />
                    <p>(Optional)</p>
                  </div>
                  <div className="download-button">
                    <button>Download</button>
                  </div>
                </div>
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
                    I agree to the <Link to="#">Terms & Condition</Link>
                  </label>
                </div>
              </div>
              <div
                className="submit-button"
                style={{ width: "300px", margin: "auto" }}
              >
                <input type="submit" value="Submit" />
              </div>
              <div style={{ width: "100%", textAlign: "center" }}>
                <p>Already have an account ?</p>
                <p style={{ paddingBottom: "30px" }}>
                  Login <Link to="/">here</Link>
                </p>
              </div>
            </form>
          </div>
          <p style={{ color: "#fff", textAlign: "center", padding: "30px 0" }}>
            &copy; 2020 Patrick Conboy. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default Sigin;
