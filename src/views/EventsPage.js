import React from 'react';
import { Link } from 'react-router-dom';


class EventsPage extends React.Component {
    render() {
        const events = this.props.events.map((e, index) =>
           <EventCard key={index} 
                      {...e}
                      deleteEvent = {this.props.deleteEvent}/>
        ) 

        return(
            <div className="EventsPage">
                <nav role="navigation">
                    <Link to='/'>Home</Link>
                </nav>
                <header role="banner">
                    <h3>Find out where you're headed here:</h3>
                </header>
                <select onChange={this.props.changeDay}>
                    <option value="" disabled hidden>Choose here</option>
                    <option value="0">Sunday</option>
                    <option value="1">Monday</option>
                    <option value="2">Tuesday</option>
                    <option value="3">Wednesday</option>
                    <option value="4">Thursday</option>
                    <option value="5">Friday</option>
                    <option value="6">Saturday</option>
                </select>
                <div>
                    {events}
                </div>

                <header role="banner">
                    <h3>Heard of some cool places you want us to know about? Tell us here:</h3>
                </header>

                <SubmitForm submitEvent={this.props.submitEvent} />
                <footer>&copy;rest_onyour_laurels 2019. All rights Reserved.</footer>
            </div>
        )
    }
}

export default EventsPage;


class SubmitForm extends React.Component {

    state = {
        title: '',
        description: '',
        location: '',
        dayOfWeek: ''
    }

    onSubmit = event => {
        event.preventDefault();
        alert("Success! Checkout your event!")
        this.props.submitEvent(this.state)
        this.setState({ title: '', description: '', location: '', dayOfWeek: '' })
    }

    // handleFormReset = () => {
    //     this.setState(() => this.state)
    // }

    onFormChange = event => {
        // const name = event.target.name
        // const value = event.target.value
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form className="submission-form" onSubmit={this.onSubmit}>

                <label htmlFor="title">Name of event:</label>
                <input
                    name="title"
                    required
                    type="text"
                    maxLength="16"
                    value={this.state.title}
                    onChange={this.onFormChange}
                    placeholder="Title" />
                <label htmlFor="day_of_week">Details:</label>
                <input
                    name="description"
                    required
                    type="text"
                    maxLength="80"
                    value={this.state.description}
                    onChange={this.onFormChange}
                    placeholder="Description" />
                <label htmlFor="day_of_week">Location:</label>
                <input
                    name="location"
                    required
                    type="text"
                    maxLength="80"
                    value={this.state.location}
                    onChange={this.onFormChange}
                    placeholder="Address" />
                <div>
                    <label htmlFor="day_of_week">Which day does the event fall on?</label>
                    <select value={this.state.dayOfWeek}
                        onChange={this.onFormChange}
                        name="dayOfWeek"
                        required >
                        <option value="" disabled hidden>Choose here</option>
                        <option value="0">Sunday</option>
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}


const EventCard = props => {
    return (
        <div className="EventCard">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <span>{props.location}</span>
            <button onClick={() => props.deleteEvent(props.id)}>Delete</button>
        </div>
    )
}

