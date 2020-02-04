import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar/navbar'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Dashboard from './components/dashborad/dashboard/dashboard'
import ProjectDetails from './components/projects/project_details/projectDetails'
import SignIn from './components/auth/signin/signin'
import SignUp from './components/auth/signup/signup'
import CreateProject from './components/projects/create_project/createProject'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
