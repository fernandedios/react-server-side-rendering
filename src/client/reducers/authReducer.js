import { FETCH_CURRENT_USER } from '../actions';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false; // explicitly return false if user is NOT authenticated

    default:
      return state;
  }
};
