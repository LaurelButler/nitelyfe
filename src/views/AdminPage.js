import React from 'react';
import { Link } from 'react-router-dom';

class AdminPage extends React.Component {
    render() {
        return (
            <div className="admin-page">
                <nav role="navigation">
                    <Link to='/'>Home</Link>
                    <Link to='/admins'>Admin Panel</Link>
                    <Link to='/login'>Logout</Link>
                </nav>
                <main role="main">
                    <header role="banner">
                        <h1>Welcome Back <em>[user]!</em></h1>
                    </header>

                    <section>
                        <header role="banner">
                            <h2>All Submissions:</h2>
                        </header>
                        <ul>
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                            <li>d</li>
                        </ul>
                        <button>See More</button>
                    </section>

                    <section>
                        <em>[when clicking on a submission, it will expand to the text and the option to edit or delete any submission posted to the website]</em>
                    </section>

                    <section>
                        <label htmlFor="user-search">Search Users:</label>
                        <input type="text" name="user-search" id="user-search" placeholder="e.g. Mary Jane" />
                    </section>
                </main>
                <footer>&copy;rest_onyour_laurels 2019. All rights Reserved.</footer>  
            </div>
        )
    }
}

export default AdminPage;