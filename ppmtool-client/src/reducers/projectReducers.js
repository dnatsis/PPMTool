import {
  CREATE_NEW_PROJECT_FAIL,
  CREATE_NEW_PROJECT_REQUEST,
  CREATE_NEW_PROJECT_RESET,
  CREATE_NEW_PROJECT_SUCCESS,
} from '../constants/projectConstants';

export const createProjectReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case CREATE_NEW_PROJECT_REQUEST:
      return { loading: true, project: {} };
    case CREATE_NEW_PROJECT_SUCCESS:
      return { loading: false, success: true, project: action.payload };
    case CREATE_NEW_PROJECT_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_NEW_PROJECT_RESET:
      return { project: {} };
    default:
      return state;
  }
};
