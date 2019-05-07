import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'react-emoji-render';
// import Image from 'react-render-image';

class Homepage extends React.Component {

    dateChange = (event) => {
        console.log(event.target.value);
        this.props.changeDay(event.target.value)
    }


    handleSubmit = (event) => {
        event.preventDefault();
        return (this.props.value)  
    }
    // handleSubmit = (event) => {
    //     ev.preventDefault();
    //     this.setState({ postEvents: [] });
    //     const { description, location, day_of_week, title } = ev.target

    //     description.value = '',
    //     location.value = '',
    //     day_of_week.value ='',
    //     title.value = '',
    // }

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
                    <option value="" selected disabled hidden>Choose here</option>
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
                <div id="submit-form">
                <form className="submission-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label for="title">Name of Event</label>
                        <input type="text" name="title" id="event-title" />
                    </div>
                    <div>
                        <label for="description">What do you need to attend? What does the event entail?</label>
                        <input type="text" name="description" id="event-description" />
                    </div>
                    <div>
                        <label for="location">Where is it located?</label>
                        <input type="text" name="location" id="event-location" />
                    </div>
                    <div>
                        <label for="day_of_week">Which day does the event fall on?</label>
                        <select onChange={this.dateChange} required>
                            <option value="" selected disabled hidden>Choose here</option>
                            <option value="0">Sunday</option>
                            <option value="1">Monday</option>
                            <option value="2">Tuesday</option>
                            <option value="3">Wednesday</option>
                            <option value="4">Thursday</option>
                            <option value="5">Friday</option>
                            <option value="6">Saturday</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                </div>
                <footer>&copy;rest_onyour_laurels 2019. All rights Reserved.</footer>
            </div>
        )
    }
}

export default Homepage;