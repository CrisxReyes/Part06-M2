import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';
import { getAllUserPosts } from '../../actions/index';
import { CommentsPost } from '../CommentsPost/CommentsPost';

export class UserPosts extends Component {
  componentDidMount(){
    const userid = this.props.match.params.id;
    this.props.getAllUserPosts(userid)
  }

  render() {
   
    return (
      <div className="details">
        <h4 className="title">{`Posts del usuario ${this.props.posts.userId}`}</h4>
        {this.props.userPosts.map(post => {
          return(
          <div className="post" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <CommentsPost id={post.id} />
          </div>
          )
        })}
      </div>
    )
  }
}


export function mapStateToProps(state) {
  return {
    userPosts: state.userPosts
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts: (id) => dispatch(getAllUserPosts(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);