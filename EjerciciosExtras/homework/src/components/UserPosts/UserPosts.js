import React from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';

export class UserPosts extends React.Component {
  componentDidMount(){
    const userid = this.props.match.params.id;
    this.props.getAllUsersPosts(userid)
  }

  render() {
   
    return (
      <div className="details">
        <h4 className="title">{`Posts del usuario ${this.props.posts.userId}`}</h4>
        
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    posts: state.userPosts,
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