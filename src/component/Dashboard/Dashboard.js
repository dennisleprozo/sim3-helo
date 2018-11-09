import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import '../../App.css';

 class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      search: '',
      posts: [],
      userposts: true
    }
  }
 //lifecycle method fires when the dashboard first loads
  componentDidMount() {
    this.getAllPost();
  }
//method that sends the axios request to the endpoint
  getAllPost = async function(){
    let { id } = this.props;
    let { search, userposts } = this.state;
    let newPost = await axios.get(
          `/api/posts/user/${id}?search=${search}&userposts=${userposts}`
    );
    console.log(newPost);
    this.setState({
      posts: newPost.data
    })
    console.log(this.state.posts)
  }

  handleSearch(val){
    this.setState({
      search: val
    })
  }
  resetSearch(){
    this.setState({
      search: ''
    })
  }


  render() {
    let displayPosts = this.state.posts.map( post => {
      let {title, username, profile_pic } = post;
      return (
        <div>
          <p>{post.title}</p>
          <p>{post.username}</p>
          <p>{post.profile_pic}</p>
        </div>
      )
    })
    return (
      <div>
        Dashboard
          <p>My Posts</p>
        <input type="checkbox" value={this.state.posts}/>
        <p>Search here:</p>
        <input type="text" placeholder="Search" onChange={(e)=>{this.handleSearch(e.target.value)}} value = {this.state.search}/>

        <button >Search</button>
        <button onClick={this.resetSearch}>Reset</button>
        {displayPosts}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.id
  };
}

export default connect(mapStateToProps, null)(Dashboard);