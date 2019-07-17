import React, { Component } from 'react'

 class PostForm extends Component {
   state = {
     title: '',
     body: '',
   }

   onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
   }

   onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(response => response.json())
      .then(data => console.log(data))

   }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br/>
            <input type="text" name="title" input={this.state.title} onChange={this.onChange}/>
          </div>
          <div>
            <label>Body: </label>
            <br/>
            <textarea name="body" input={this.state.body} onChange={this.onChange}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
