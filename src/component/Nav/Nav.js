import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



//how to chk which view the user is currently on (this.props.location.pathname )
 function Nav() {
  return (
    <div>
      Nav<br/>
      <Link to='/dashboard'><button>Home</button></Link><br/>
      <Link to='/new'><button>New Post</button></Link><br/>
      <Link to='/'><button>Logout</button></Link><br/>
    </div>
  )
}

function mapStateToProps(state) {
    let {username, profile_pic} = state;
    return {username, profile_pic};
}

export default connect(mapStateToProps, null)(Nav);
