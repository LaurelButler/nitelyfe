import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <nav role="navigation">
                    <Link to='/'>Home</Link>
                    <Link to='/admins'>Admin Panel</Link>
                    <Link to='/register'>Logout</Link>
                </nav>
                <form className="login-form">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' id='LoginForm-username' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='LoginForm-password' />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>  
        )
    }
}

export default LoginForm;