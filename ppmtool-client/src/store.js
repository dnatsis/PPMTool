import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createProjectReducer,
  getProjectsReducer,
  getProjectByIdReducer,
  deleteProjectReducer,
} from './reducers/projectReducers';

const reducer = combineReducers({
  createProject: createProjectReducer,
  getProjects: getProjectsReducer,
  getProjectById: getProjectByIdReducer,
  deleteProject: deleteProjectReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
