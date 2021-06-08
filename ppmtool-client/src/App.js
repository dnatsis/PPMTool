import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProject from './components/Project/AddProject';
import UpdateProject from './components/Project/UpdateProject';
import ProjectBoard from './components/ProjectBoard/ProjectBoard';
import AddProjectTask from './components/ProjectBoard/ProjectTasks/AddProjectTask';
import UpdateProjectTask from './components/ProjectBoard/ProjectTasks/UpdateProjectTask';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/addProject" component={AddProject} exact />
      <Route path="/updateProject/:id" component={UpdateProject} exact />
      <Route path="/projectBoard/:id" component={ProjectBoard} exact />
      <Route path="/addProjectTask/:id" component={AddProjectTask} exact />
      <Route
        path="/updateProjectTask/:backlog_id/:pt_id"
        component={UpdateProjectTask}
        exact
      />
    </Router>
  );
}

export default App;
