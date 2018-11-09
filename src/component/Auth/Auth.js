import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { updateUsername, updateUserId, updateProfilePic } from  '../../ducks/reducer';


 class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput(val) {
    this.setState({
      username: val
    });
  }
  handlePassword(val) {
    this.setState({
      password: val
    });
  }

  login = async function() {
    let { username, password } = this.state;
    let user = await axios.post(`/api/auth/login`, { username, password });
    let { updateUsername, updateUserId, updateProfilePic } = this.props;
    updateUsername(user.data.username);
    updateUserId(user.data.id);
    updateProfilePic(user.data.profile_pic);
    this.props.history.push("/dashboard");
  };

  register = async function() {
    let { username, password } = this.state;
    let user = await axios.post(`/api/auth/register`, { username, password });
    let { updateUsername, updateUserId, updateProfilePic } = this.props;
    updateUsername(user.data.username);
    updateUserId(user.data.id);
    updateProfilePic(user.data.profile_pic);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        
        <input
          type="text"
          placeholder="username"
          onChange={e => {
            this.handleInput(e.target.value);
          }}
        /><br/>
        <input
          type="text"
          placeholder="password"
          onChange={e => {
            this.handlePassword(e.target.value);
          }}
        />
        <br />
        <button onClick={() => this.login()}>Login</button>
        <button onClick={() => this.register()}>Register</button>
      </div>
    );
  }
}

export default connect(null, {updateProfilePic, updateUserId, updateUsername})(Auth);