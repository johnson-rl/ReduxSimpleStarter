// this state argument refers to the state specific to the reducer, not the app state
export default function(state = null, action) {

  // returns the payload if the action type applies
  // app state will be updated with the new data
  switch(action.type){
    case 'BOOK_SELECTED':
    return action.payload;
  }

  // base case when action does not apply
  return state
}
