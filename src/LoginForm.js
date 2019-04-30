import React from 'react';

class LoginForm extends React.Component {
    render() {
        return (
            <form className="login-form">
                <div>
                    <label for="username">Username</label>
                    <input type="text" name='username' id='LoginForm-username' />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" name='password' id='LoginForm-password' />
                </div>
                <button type='submit'>Login</button>
            </form>

        
        )
    }
}

export default LoginForm;