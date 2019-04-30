import React from 'react';

class Users extends React.Component {
    render() {
        return (
            <div>
                <nav role="navigation">
                    <a href="#">Home</a>
                    <a href="#">Logout</a>
                    <a href="#">Change Password</a>
                </nav>
                <main role="main">
                    <header role="banner">
                        <h1>Welcome Back <em>[user]!</em></h1>
                    </header>

                    <section>
                        <header role="banner">
                            <h2>Your Submissions:</h2>
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
                        <em>[when clicking on a submission, it will expand to the text and the option to edit or delete their submission]</em>
                    </section>
                </main>
                <footer role="content-info">&copy;rest_onyour_laurels 2019. All rights Reserved.</footer>
            </div>
        )
    }
}

export default Users;