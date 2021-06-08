import {
  CREATE_NEW_PROJECT_FAIL,
  CREATE_NEW_PROJECT_REQUEST,
  CREATE_NEW_PROJECT_RESET,
  CREATE_NEW_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_BY_ID_FAIL,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
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
      return { loading: true, ...state };
    case GET_PROJECTS_SUCCESS:
      return { loading: false, projects: action.payload };
    case GET_PROJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProjectByIdReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case GET_PROJECT_BY_ID_REQUEST:
      return { loading: true, ...state };
    case GET_PROJECT_BY_ID_SUCCESS:
      return { loading: false, project: action.payload };
    case GET_PROJECT_BY_ID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROJECT_REQUEST:
      return { loading: true };
    case DELETE_PROJECT_SUCCESS:
      return { loading: false, success: true };
    case DELETE_PROJECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
