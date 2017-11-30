export const FETCH_USERS = 'fetch_users';

// receive custom axiosInstance as api from redux-thunk
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users'); // api will prepend baseURL to /users

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';

// receive custom axiosInstance as api from redux-thunk
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};
