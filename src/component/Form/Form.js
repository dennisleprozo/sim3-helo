import React, { Component } from 'react'

export default class Form extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      img: '',
      content: ''
    }
  }

  //handlechange(3)--submit new posts
  render() {
    return (
      <div>
        Form
      </div>
    )
  }
}
