import React from 'react';
import { Link } from 'react-router-dom';
// import ChampagneCocktail from './screenshots/ChampagneCocktail.jpg';
import cocktailimage from '../screenshots/cocktailimage.jpg';
import cocktailsPromo from '../screenshots/cocktailsPromo.jpg';
// import flamingcocktail from './screenshots/flamingcocktail.jpeg';
import whiskey from '../screenshots/whisky.jpg';
import martini from '../screenshots/martini.jpg';





class Homepage extends React.Component {

    dateChange = (event) => {
        // console.log(event.target.value);
        this.props.changeDay(event.target.value)
    }

    render() {
        return(
            <div className="home-page">
                <nav role="navigation">
                    <Link to='/' className="nav-link">Home</Link>
                    <Link to='EventsPage/0' className="nav-link">Events</Link>
                    {/* <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link> */}
                </nav>
              
                <header role="banner">
                    <h1>NiteLyfe </h1>
                    <div id="slideshow">
                        <div className="slide-wrapper">
                            <div className="slide"><img src={cocktailimage} alt="cocktail"/></div>
                            <div className="slide"><img src={cocktailsPromo} alt="cocktail" /></div>
                            <div className="slide"><img src={martini} alt="cocktail" /></div>
                            <div className="slide"><img src={whiskey} alt="cocktail" /></div>
                        </div>
                    
                    </div>
                    <h2>Find the best service industry events here where balling on a budget is a habit!</h2>
                    <h3>Bringing together a sense of community and a way to wind down.</h3>
                    <button className="try-us"><Link to='EventsPage'>Try Us Out!</Link></button>
                </header>
                

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
            
                <footer>&copy;Laurel Butler 2019. All rights Reserved.</footer>
            </div>
        )
    }
}

export default Homepage;




