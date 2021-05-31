import axios from 'axios';
import {
  CREATE_NEW_PROJECT_REQUEST,
  CREATE_NEW_PROJECT_SUCCESS,
  CREATE_NEW_PROJECT_FAIL,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_FAIL,
} from '../constants/projectConstants';

export const createProjectAction = (project) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_NEW_PROJECT_REQUEST });

    const { data } = await axios.post(
      `http://localhost:8080/api/project`,
      project
    );

    dispatch({
      type: CREATE_NEW_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_NEW_PROJECT_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProjectsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECTS_REQUEST });

    const { data } = await axios.get('http://localhost:8080/api/project/all');

    dispatch({
      type: GET_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECTS_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProjectByIdAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECT_BY_ID_REQUEST });

    const { data } = await axios.get(`http://localhost:8080/api/project/${id}`);

    dispatch({
      type: GET_PROJECT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECT_BY_ID_FAIL,
      payload: error.response.data,
    });
  }
};
