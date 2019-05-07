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
    dayIndex: null,
    postEvents: '',
  }

  changeDay = (dayIndex) => {
    this.setState({dayIndex})
  }

  addEvent = (eventAddition) => {
    this.setState({eventAddition})
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
  .then(data => {
    this.setState({
      events: data
    })
    console.log(this.state.events)
  })
  .catch(err => console.log('Error', err));
}


  componentDidMount() {
    this.fetchApi();
  }

 


  render() {

    const filterEvents = (event) => {
        const dayOfWeek = (event.day_of_week)
        //this turns the string into a number
        return dayOfWeek === parseInt(this.state.dayIndex)
    }
    
    console.log(this.state.events);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <Homepage events={this.state.events.filter(filterEvents)} changeDay={this.changeDay}/>
          )} /> 
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
