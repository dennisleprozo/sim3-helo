import React, { Component } from 'react';
import axios from 'axios';
import { updateUser} from '../../ducks/user';
import { connect } from 'react-redux';

class Privates extends Component {

  async componentDidMount() {
    let res = await axios.get('/api/user-data');
    console.log(res)
    this.props.updateUser(res.data)
  }

  render() {
    let { user } = this.props;
    return (
      <div>
        <h1>Account Information</h1>
        <hr/><hr/><hr/>
        {
            user.username ? (
              <div>
                <p>Welcome</p>
                <p>Username: {user.username}</p>
                <p>Profile Pic: {user.profile_pic}</p>
              </div>

            ) : <p>Please Log In</p>
        }
        
        <a href="http://localhost:4000/auth/logout">
          <button> Log out </button>
        </a>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return state


}

export default connect(mapStateToProps, {updateUser: updateUser})(Privates)