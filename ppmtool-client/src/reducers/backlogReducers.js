import {
  GET_PROJECT_BACKLOG_REQUEST,
  GET_PROJECT_BACKLOG_SUCCESS,
  GET_PROJECT_BACKLOG_FAIL,
  GET_PROJECT_TASK_REQUEST,
  GET_PROJECT_TASK_SUCCESS,
  GET_PROJECT_TASK_FAIL,
  DELETE_PROJECT_TASK_REQUEST,
  DELETE_PROJECT_TASK_SUCCESS,
  DELETE_PROJECT_TASK_FAIL,
  ADD_PROJECT_TASK_REQUEST,
  ADD_PROJECT_TASK_SUCCESS,
  ADD_PROJECT_TASK_FAIL,
  ADD_PROJECT_TASK_RESET,
  UPDATE_PROJECT_TASK_REQUEST,
  UPDATE_PROJECT_TASK_SUCCESS,
  UPDATE_PROJECT_TASK_FAIL,
  UPDATE_PROJECT_TASK_RESET,
} from '../constants/projectConstants';

export const getProjectBacklogReducer = (state = { backlog: [] }, action) => {
  switch (action.type) {
    case GET_PROJECT_BACKLOG_REQUEST:
      return { loading: true, ...state };
    case GET_PROJECT_BACKLOG_SUCCESS:
      return { loading: false, backlog: action.payload };
    case GET_PROJECT_BACKLOG_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProjectTaskReducer = (state = { projectTask: {} }, action) => {
  switch (action.type) {
    case GET_PROJECT_TASK_REQUEST:
      return { loading: true, ...state };
    case GET_PROJECT_TASK_SUCCESS:
      return { loading: false, projectTask: action.payload };
    case GET_PROJECT_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteProjectTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROJECT_TASK_REQUEST:
      return { loading: true };
    case DELETE_PROJECT_TASK_SUCCESS:
      return { loading: false, success: true };
    case DELETE_PROJECT_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addProjectTaskReducer = (state = { projectTask: {} }, action) => {
  switch (action.type) {
    case ADD_PROJECT_TASK_REQUEST:
      return { loading: true };
    case ADD_PROJECT_TASK_SUCCESS:
      return { loading: false, success: true, projectTask: action.payload };
    case ADD_PROJECT_TASK_FAIL:
      return { loading: false, error: action.payload };
    case ADD_PROJECT_TASK_RESET:
      return { projectTask: {} };
    default:
      return state;
  }
};

export const updateProjectTaskReducer = (
  state = { projectTask: {} },
  action
) => {
  switch (action.type) {
    case UPDATE_PROJECT_TASK_REQUEST:
      return { loading: true };
    case UPDATE_PROJECT_TASK_SUCCESS:
      return { loading: false, success: true, projectTask: action.payload };
    case UPDATE_PROJECT_TASK_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_PROJECT_TASK_RESET:
      return { projectTask: {} };
    default:
      return state;
  }
};
