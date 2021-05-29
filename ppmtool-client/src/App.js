import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProject from './components/Project/AddProject';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/addProject" component={AddProject} exact />
    </Router>
  );
}

export default App;
