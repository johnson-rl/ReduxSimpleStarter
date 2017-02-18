export function selectBook(book){
  // console.log('you have selected: ' + book.title) //sanity checker

  // selectBook is an action creator
  // therefor is must return an actions
  // ie an object with a type property and maybe a payload
  return {
    type: "BOOK_SELECTED", //always uppercase
    payload: book
  };
}
