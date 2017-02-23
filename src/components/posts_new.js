import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'; // almost identical to connect function
// redux-form  adds some helpers to props for us see in const dec below
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object // defines object on PostNew, will search components until it finds 'router'
  }; // now we have this.context.router

  onSubmit(props) { // props from form
    this.props.createPost(props) // returns a promis, when resolved, post is saved, and we can reroute
    .then(()=>{
      this.context.router.push('/')
    })
  }

  render () {

    const { fields: {title, categories, content}, handleSubmit } = this.props; // helper from redux-form
    // const title = this.props.fields.title | same as above, just declaring multiple const at once
    // console.log(title); // run to see all the helper methods given by redux-form


// handleSubmit akes in an action creator
// @{...title} - all props of title object passed into input
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Blog Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className='text-help'>
            {title.touched ? title.error : '' }
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : '' }`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
            <div className='text-help'>
              {categories.touched ? categories.error : '' }
            </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : '' }`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
            <div className='text-help'>
              {content.touched ? content.error : '' }
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {}
  if(!values.title){
    errors.title = 'Enter a username'
  }
  if(!values.categories){
    errors.categories = 'Enter categories'
  }
  if(!values.content){
    errors.content = 'Enter content'
  }
  return errors
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({ // letter passed off to redux-form
    form: 'PostsNewForm', // name of the form, MUST BE UNIQUE
    fields: ['title','categories','content'], // fields that are in form
    validate
}, null, { createPost })(PostsNew);

// Behind the scenes, data is being recorded in application state.
// redux-form handles data on an application level not a component level

// state === {
//   form: {
//     PostsNewForm: {
//       title: '.....',
//       categories: '.....',
//       content: '......'
//     }
//   }
// }
