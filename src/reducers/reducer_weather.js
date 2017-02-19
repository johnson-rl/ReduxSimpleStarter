import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type){
    case FETCH_WEATHER: // because this is a const, it will match the actions index

      // !!!!Be careful not to mutate the state!!!!
      // return state.push(action.payload.data) // DO NOT EVER DO THIS
      // !!!!must return a new instance of state!!!!

      // Concat will return a new instance which is better
      // return state.concat([action.payload.data]);

      // THE BEST WAY!!! THE JS6 WAY!!!
      // Creates new array, adds items from the old state to the end of the new array
      return [ action.payload.data, ...state ];
  }
  // console.log('Action received', action)
  return state;
}
