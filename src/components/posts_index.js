import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; //Not needed due to refactor
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'; // use to create anchor tags

class PostsIndex extends Component {
  componentWillMount () { //called automatically when component is about to be rendered for the first time...not on subsequent renders
    this.props.fetchPosts()
  }

  renderPosts(){
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/"+post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">Add a post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts: state.posts.all}
}

// function mapDispatchToProps(dispatch) { // { fetchPosts: fetchPosts } object below (written as {fetchPosts}) is the same as this
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
