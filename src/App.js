import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './views/Homepage';
import AdminPage from './views/AdminPage';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
// import Users from './components/Users';
import EventsPage from './views/EventsPage';


class App extends React.Component {

  state = {
    events: [],
    dayIndex: 0,
  }

  changeDay = (event) => {
    this.setState({dayIndex: event.target.value})
  }


//this fetch request is getting the server to communicate with the client
getAllEvents = () => {
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
  })
  .catch(err => console.log('Error', err));
}


  componentDidMount() {
    this.getAllEvents();
  }


  submitEvent = (data) => {
    fetch(`https://intense-brook-53921.herokuapp.com/api/events`, {
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

  deleteEvent = (id) => {
    console.log('hi', id);
    fetch(`https://intense-brook-53921.herokuapp.com/api/events/${id}`, {
      method: 'DELETE'
    })
      .then((res) => {
        console.log('hello there', res);
        this.getAllEvents(res);
      })
  }
// http://localhost:8000/api/events/${id}
  // https://intense-brook-53921.herokuapp.com/api/events/${id}


  render() {
    // const filterDayEvents = (urlDay) => {
    //   console.log('inside of filter day', urlDay);
    //   return [];
    // }

    const filterEvents = (event) => {

    const dayOfWeek = (event.day_of_week)
    //this turns the string into a number
    return dayOfWeek === parseInt(this.state.dayIndex)
      // return dayOfWeek === parseInt(data.match.params.day)
    }
    
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
          <Route path="/EventsPage/:day" render={(data) =>  {
            
            console.log(data.match.params.day);
            return (
            <EventsPage events={this.state.events.filter(filterEvents)}
              changeDay={this.changeDay}
              submitEvent={this.submitEvent}
              deleteEvent={this.deleteEvent}
            /> )
          }} />
        </Switch>
        {/* events={filterDayEvents(data.match.params.day)} */}
      </div>
    )
  }
}


export default App;
