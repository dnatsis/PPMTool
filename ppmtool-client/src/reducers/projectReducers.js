import {
  CREATE_NEW_PROJECT_FAIL,
  CREATE_NEW_PROJECT_REQUEST,
  CREATE_NEW_PROJECT_RESET,
  CREATE_NEW_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
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

export const getProjectsReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { loading: true, projects: [] };
    case GET_PROJECTS_SUCCESS:
      return { loading: false, projects: action.payload };
    case GET_PROJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
