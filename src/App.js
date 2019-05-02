import React from 'react';
// import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import AdminPage from './AdminPage';
import Register from './Register';
import LoginForm from './LoginForm';
// import Users from './Users';


class App extends React.Component {

  state = {
    events: [],
  }

//this fetch request is getting the server to communicate with the client
fetchApi(method = 'GET', apiBody) {
  return fetch(`http://localhost:8000/api/events` , {
    method: method,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(apiBody)
  })
  .then(res => {
    return res.json()
  })
  .catch(err => console.log('Error', err));
}


  componentDidMount() {
    fetch(`http://localhost:8000/api/events`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          events: data
        });  
      });
  }

 


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/users" component={ Users } /> */}
          <Route path="/admins" component={AdminPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    )
  }
}


export default App;
