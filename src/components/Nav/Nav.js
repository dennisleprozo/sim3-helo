import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

// this.props.location.pathname ???

function Nav() {
  return (      

    <div className="navbar">
      Navigation Bar
      <hr />
      <Link to="/dashboard">
        <button> Home </button>{" "}
      </Link>
      <Link to="/new">
        <button> New Post </button>{" "}
      </Link>
      <Link to="/">
        <button> Log Out </button>{" "}
      </Link>
    </div>
  );
  // console.log('this.props.match', this.props.match);
}

//returns the nav state to reducer
function mapStateToProps(state) {
  let { username, profile_pic } = state;
  return { username, profile_pic };
}

export default connect(mapStateToProps, null)(withRouter(Nav));

