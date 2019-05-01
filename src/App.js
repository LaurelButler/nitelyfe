import React from 'react';
// import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import AdminPage from './AdminPage';
import Register from './Register';
import LoginForm from './LoginForm';
// import Users from './Users';


function App() {
  return (
    <div className="App">
    <Switch>
        <Route exact path="/" component={ Homepage } />
        {/* <Route path="/users" component={ Users } /> */}
        <Route path="/admins" component={ AdminPage } /> 
        <Route path="/register" component={ Register } />
        <Route path="/login" component={ LoginForm } />
    </Switch>
    </div>
  );
}

export default App;
