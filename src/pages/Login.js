import React from 'react';
import '../static/css/Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <main className="main">
                    <h1 className="main_hello">Hello!</h1>
                    <a>
                        <button className="main_login">Войти</button>
                    </a>
                </main>
                <footer className="footer">
                    <p className="footer_copyright">&copy;A.R.</p>
                    <a className="footer_github_link" href="https://github.com/">Link to GitHub</a>
                </footer>
            </div>
        );
    }
}

export default Login;
