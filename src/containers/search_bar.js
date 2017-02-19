import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
    // binds onInputChange to "this", which in this particular context is SearchBar
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this); // also need to bind submit
  }

  onInputChange(event) {
    // console.log(event.target.value);// without next line, state will not update
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''}); // resets form to empty string...component will then re-render
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// Gives us access to fetchWeather here
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch); //makes sure action flows to reducers
}

// null is used because we want to ignore the first arguement re state
// we only want to pass the function in, no need for state
export default connect(null, mapDispatchToProps)(SearchBar);
