import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {

    dateChange = (event) => {
        console.log(event.target.value);
        this.props.changeDay(event.target.value)
    }

    render() {
        //console.log(this.props.events);

        const events = this.props.events.map((e, index) => 
            <li key={index}>
                 <p>{e.description}</p>
             </li>
             ) 
        
        return(
            <div className="home-page">
                <nav role="navigation">
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </nav>
                <header role="banner">
                    <h1>NiteLyfe</h1>
                    {/* had to be wrapped in ul tags because it was multiple items */}
                    <ul>
                    {events}
                    </ul>
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

                {/* figure out how to set this up later */}
                {/* <header role="banner">
                    <h3>Looking for a specific place instead?</h3>
                </header>
                <label htmlFor="search">Search</label>
                <input type="text" name='search' id='search' placeholder='e.g. Olde Blind Dog' />
                <button type="submit" onSubmit={this.handleSubmit}>Go!</button> */}

                <header role="banner">
                    <h3>These places are on fire right now:</h3>
                </header>
                <p>[<em>company image placeholder</em>]</p>
                <p>lorem ipsum</p>
                <footer>&copy;rest_onyour_laurels 2019. All rights Reserved.</footer>
            </div>
        )
    }
}

export default Homepage;