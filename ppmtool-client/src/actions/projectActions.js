import axios from 'axios';
import {
  CREATE_NEW_PROJECT_REQUEST,
  CREATE_NEW_PROJECT_SUCCESS,
  CREATE_NEW_PROJECT_FAIL,
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
