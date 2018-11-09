import React, { Component } from 'react'

export default class Post extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      img: '',
      content: '',
      author: '',
      authorPicture: ''
    }
  }


  render() {
    return (
      <div>
        <h1>New Post</h1>
        <p>Title:</p>
        <input type="text"/>

        <span>IMAGE</span>

        <p>ImageURL:</p>
        <input type="text"/><br/>
        <p>Content</p>
        <input type="text"/><br/>

        <button>Post</button>


      </div>
    )
  }
}
