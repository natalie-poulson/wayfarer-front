import React, { Component } from 'react';
import Post from './Post'

class CityPostsList extends Component {
  render() {
    let posts = this.props.posts.map( (post) => {
      return (
          <Post
            key={post._id}
            post={post}
          // deletePost={this.props.deletePost}
          // updatePost={this.props.updatePost} 
          />
      )
      })


    return (
        <ul>
            {posts}
        </ul>
    );
  }
}

export default CityPostsList;



