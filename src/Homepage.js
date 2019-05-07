import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'react-emoji-render';
// import Image from 'react-render-image';


class Homepage extends React.Component {

    dateChange = (event) => {
        // console.log(event.target.value);
        this.props.changeDay(event.target.value)
    }




    render() {

        const events = this.props.events.map((e, index) => 
            <li key={index}>
                <p>{e.title}</p>
                <p>{e.description}</p>
                <p>{e.location}</p>
             </li>
             ) 
        
        return(
            <div className="home-page">
                <nav role="navigation">
                    <Link to='/'>Home</Link>
                    {/* <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link> */}
                </nav>
              
                <header role="banner">
                    <h1>NiteLyfe </h1>
                    <Emoji text=":cocktail:" onlyEmojiClassName="make-emojis-large" />
                    <h2>Find the best service industry events here where balling on a budget is a habit!</h2>
                    <h3>Bringing together a sense of community and a way to wind down.</h3>
                </header>
                    
                
                <header role="banner">
                    <h3>Find out where you're headed here:</h3>
                </header>
                <select onChange = {this.dateChange}>
                    <option value="" disabled hidden>Choose here</option>
                    <option value="0">Sunday</option>
                    <option value="1">Monday</option>
                    <option value="2">Tuesday</option>
                    <option value="3">Wednesday</option>
                    <option value="4">Thursday</option>
                    <option value="5">Friday</option>
                    <option value="6">Saturday</option>
                </select>
                <ul>
                    {events}
                </ul>

                {/* figure out how to set this up later */}
                {/* <header role="banner">
                    <h3>Looking for a specific place instead?</h3>
                </header>
                <label htmlFor="search">Search</label>
                <input type="text" name='search' id='search' placeholder='e.g. Olde Blind Dog' />
                <button type="submit" onSubmit={this.handleSubmit}>Go!</button> */}


                {/* i will work out these details later. focus on MVP */}
                {/* <header role="banner">
                    <h3>These places are on fire right now:</h3>
                </header>
                <p>[<em>company image placeholder</em>]</p>
                <p>lorem ipsum</p> */}

                <header role="banner">
                    <h3>Heard of some cool places you want us to know about? Tell us here:</h3>
                </header>
            
                <SubmitForm submitEvent={this.props.submitEvent}/>
            
                <footer>&copy;rest_onyour_laurels 2019. All rights Reserved.</footer>
            </div>
        )
    }
}

export default Homepage;



class SubmitForm extends React.Component {

    state = {
        title: '',
        description: '',
        location: '',
        dayOfWeek: ''
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.submitEvent(this.state)
    }

    onFormChange = event => {
        // const name = event.target.name
        // const value = event.target.value
        const { name, value } = event.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <form className="submission-form" onSubmit = {this.onSubmit}>

                <label htmlFor="title">Name of event:</label>
                <input
                    name="title"
                    required
                    type="text"
                    value={this.state.title}
                    onChange={this.onFormChange}
                    placeholder="Title" />
                <label htmlFor="day_of_week">Details:</label>
                <input
                    name = "description"
                    required
                    type="text"
                    value={this.state.description}
                    onChange={this.onFormChange}
                    placeholder="Description" />
                <label htmlFor="day_of_week">Location:</label>
                <input
                    name = "location"
                    required
                    type="text" 
                    value={this.state.location}
                    onChange={this.onFormChange}
                    placeholder="Address" />
                <div>
                    <label htmlFor="day_of_week">Which day does the event fall on?</label>
                    <select value={this.state.dayOfWeek}
                            onChange={this.onFormChange}
                            name = "dayOfWeek"
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
