import React from 'react';

class Homepage extends React.Component {
    render() {
        return(
            <div className="home-page">
                <nav role="navigation">
                    <a href="#">Home</a>
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </nav>
                <header role="banner">
                    <h1>NiteLyfe</h1>
                    <h2>Find the best service industry events here where balling on a budget is a habit!</h2>
                    <h3>Bringing together a sense of community and a way to wind down.</h3>
                </header>
                <header role="banner">
                    <h3>Find out where you're headed here:</h3>
                </header>
                <label for="search">Search</label>
                <input type="text" name='search' id='search' placeholder='e.g. Olde Blind Dog' />
                <header role="banner">
                    <h3>These places are on fire right now:</h3>
                </header>
                <p>[<em>company image placeholder</em>]</p>
                <p>lorem ipsum</p>
                <footer role="content-info">&copy;rest_onyour_laurels 2019. All rights Reserved.</footer>
            </div>
        )
    }
}

export default Homepage;