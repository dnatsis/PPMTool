import axios from 'axios';
import {
  ADD_PROJECT_TASK_FAIL,
  ADD_PROJECT_TASK_REQUEST,
  ADD_PROJECT_TASK_SUCCESS,
} from '../constants/projectConstants';

export const addProjectTaskAction =
  (backlog_id, projectTask) => async (dispatch) => {
    try {
      dispatch({ type: ADD_PROJECT_TASK_REQUEST });

      const { data } = await axios.post(
        `/api/backlog/${backlog_id}`,
        projectTask
      );

      dispatch({
        type: ADD_PROJECT_TASK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PROJECT_TASK_FAIL,
        payload: error.response.data,
      });
    }
  };
