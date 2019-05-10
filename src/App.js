import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import AdminPage from './AdminPage';
import Register from './Register';
import LoginForm from './LoginForm';
// import Users from './Users';
import EventsPage from './EventsPage';


class App extends React.Component {

  state = {
    events: [],
    dayIndex: null
  }

  changeDay = (event) => {
    this.setState({dayIndex: event.target.value})
  }


//this fetch request is getting the server to communicate with the client
getAllEvents = () => {
  console.log('hello')
  return fetch(`https://intense-brook-53921.herokuapp.com/api/events` , {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
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
    this.getAllEvents();
  }


  submitEvent = (data) => {
    fetch('https://intense-brook-53921.herokuapp.com/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "title": data.title,
        "description": data.description,
        "location": data.location,
        "day_of_week": data.dayOfWeek
      })
    })
    .then(this.getAllEvents)
  };

  render() {

    const filterEvents = (event) => {
      console.log(this.state.dayIndex);
        const dayOfWeek = (event.day_of_week)
        //this turns the string into a number
        return dayOfWeek === parseInt(this.state.dayIndex)
    }
    
    console.log(this.state.events);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <Homepage />
          )} /> 
          {/* <Route path="/users" component={ Users } /> */}
          <Route path="/admins" component={AdminPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginForm} />
          <Route path="/EventsPage" render={() => (
            <EventsPage events={this.state.events.filter(filterEvents)}
              changeDay={this.changeDay}
              submitEvent={this.submitEvent}
          /> )}  />
        </Switch>
      </div>
    )
  }
}


export default App;
