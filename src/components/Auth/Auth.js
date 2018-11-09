import React, { Component } from "react";
// import logo from "./communityBank.svg";
import "./Auth.css";
import axios from "axios";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
      // profile_pic: ""
    };
  }

  updateUsername(e) {
    this.setState({ username: e.target.value });
  }
  updatePassword(e) {
    this.setState({ password: e.target.value });
  }
  // updateProfilePic(e) {
  //     this.setState({ profile_pic: e.target.value });
  // }

  async login() {
    if (!this.state.username || !this.state.password)
      return alert("Please fill out username and password.");
    let res = await axios.post("/auth/login", {
      username: this.state.username,
      password: this.state.password
    });
    console.log(res);
    // history piles up data Last In On Top
    if (res.data.message === "logged In") {
      this.props.history.push("/privates");
    } else {
      alert(res.data.message);
    }
  }

  async signup() {
    if (!this.state.username || !this.state.password)
      return alert("Please fill out username and password.");
    let res = await axios.post("/auth/signup", {
      username: this.state.username,
      password: this.state.password
    });
    if (res.data.message === "logged In") {
      this.props.history.push("/privates");
    } else {
      alert(res.data.message);
    }
  }

  render() {
    return (
      <div className="login-container">
        {/* <img className="bank-logo" src={logo} alt="" /> */}
        <form>
          <div>
            <label>User Name:</label>
            <br />
            <input onChange={e => this.updateUsername(e)} type="text" />
          </div>
          <div>
            <label>Password:</label>
            <br />
            <input onChange={e => this.updatePassword(e)} type="text" />
          </div>
          {/* <div>
                <label>Profile Picture:</label>
                <br />
                    <input onChange={e => this.updateProfilePic(e)} type="text" />
            </div> */}

          <button onClick={() => this.login()} type="button">
            Login
          </button>
          <button onClick={() => this.signup()} type="button">
            Register
          </button>
        </form>
      </div>
    );
  }
}
