import React from 'react';
import { Link } from 'react-router-dom';


class Register extends React.Component {
    render() {
        return(
            <div className="register">
                <nav role="navigation">
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Logout</Link>
                </nav>
                <header>
                    <h3>Want to stay updated on the latest events?</h3>
                    <h4>Register here:</h4>
                </header>
                <form class='signup-form'>
                    <div>
                        <label for="first-name">First name</label>
                        <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                    </div>
                    <div>
                        <label for="last-name">Last name</label>
                        <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                    </div>
                    <div>
                        <label for="username">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>

                
                <header role="banner">
                    <h3>Interested in becoming an Admin?</h3>
                </header>
                <p>Help to make this not only the best, but the safest place for our service family.</p>
                <form class='signup-form'>
                    <div>
                        <label for="first-name">First name</label>
                        <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                    </div>
                    <div>
                        <label for="last-name">Last name</label>
                        <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                    </div>
                    <div>
                        <label for="username">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <h4>Please answer a few questions:</h4>
                        <p>Have you had a job in the service industry of some sort (i.e. retail, driving for uber, restaurants)?</p>
                        <textarea placeholder="your answer here..." required></textarea>
                        <p>What was your best and worst experience in the service industry? Why?</p>
                        <textarea placeholder="your answer here..." required></textarea>
                        <p>What interests you about NiteLyfe?</p>
                        <textarea placeholder="your answer here..." required></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <footer role="content-info">&copy;rest_onyour_laurels 2019. All rights Reserved.</footer>
            </div>
        )
    }
}

export default Register;