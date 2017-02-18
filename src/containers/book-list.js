import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };
};

//Purpose of function is to take application state as argument
//whateve is returned will show up as BookList props
function mapStateToProps(state){
  return {
    books: state.books
  };
};

//Anything returned will end up as props on booklist container as "selectBook"
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result is passed to all reducers
  //dispatch passes actions to all reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//takes book component and mapStateToProps and exports a container
/////////////////////////
//it "connects" the two//
/////////////////////////
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//arguments in connect fucntion seem to add props to the container
