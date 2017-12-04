import { FETCH_ADMINS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload.data; // axios puts the results in the data property

    default:
      return state;
  }
}
