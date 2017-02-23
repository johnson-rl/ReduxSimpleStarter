import { combineReducers } from 'redux';
import PostReducer from './reducer_posts'
import { reducer as formReducer} from 'redux-form';// grab reducer from redux-form, name it formReducer

const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer
});

export default rootReducer;
