import React from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';
import { getAllUsersPosts } from '../../actions/index';
import CommentsPost from '../CommentsPost.js';

export class UserPosts extends React.Component {
  componentDidMount(){
    const userid = this.props.match.params.id;
    this.props.getAllUsersPosts(userid)
  }

  render() {
   
    return (
      <div className="details">
        <h4 className="title">{`Posts del usuario ${this.props.posts.userId}`}</h4>
        {this.props.posts.map(post =>{
          <div className="post" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <CommentsPost id={post.id} />
          </div>
        })}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    posts: state.userPosts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsersPosts: (id) => dispatch(getAllUsersPosts(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);