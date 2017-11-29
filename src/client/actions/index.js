export const FETCH_USERS = 'fetch_users';

// receive custom axiosInstance as api from redux-thunk
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users'); // api will prepend baseURL to /users

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
