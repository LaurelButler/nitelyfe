import React from 'react';
import { Link } from 'react-router-dom';
// import Emoji from 'react-emoji-render';
// import Image from 'react-render-image';
// import Img from 'react-image';
// import screenshots from '';




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
                    <Link to='EventsPage' className="nav-link">Events</Link>
                    {/* <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link> */}
                </nav>
              
                <header role="banner">
                    <h1>NiteLyfe </h1>
                    {/* <Emoji text=":cocktail:" onlyEmojiClassName="make-emojis-large" /> */}
                    <div id="slideshow">
                        <div class="slide-wrapper">
                            <div class="slide"><img src="/screenshots/ChampagneCocktail.jpg" alt="cocktail" /></div>
                            <div class="slide"><img src="/screenshots/cocktailimage.jpg" alt="cocktail" /></div>
                            <div class="slide"><img src="/screenshots/cocktails-promo.jpg" alt="cocktail" /></div>
                            <div class="slide"><img src="/screenshots/flamingcocktail.jpeg" alt="cocktail" /></div>
                            <div class="slide"><img src="/screenshots/shutterstock_332050613-0d96cb229c26.jpg" alt="cocktail" /></div>
                    
                        </div>
                    
                    </div>
                    <h2>Find the best service industry events here where balling on a budget is a habit!</h2>
                    <h3>Bringing together a sense of community and a way to wind down.</h3>
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
            
                <footer>&copy;rest_onyour_laurels 2019. All rights Reserved.</footer>
            </div>
        )
    }
}

export default Homepage;




