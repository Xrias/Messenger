import React from 'react';
import { Link } from 'react-router-dom'
import '../static/css/login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <main className="main">
                    <h1 className="main_hello">Hello!</h1>
                    <div className = "main_login">
                        <span className="main_login_span">Логин</span>
                        <input className="main_login_input" />
                    </div>
                    <div className = "main_password">
                        <span className="main_password_span">Пароль</span>
                        <input className="main_password_input" />
                    </div>
                    <Link to='/app'><button className="main_enter">Войти</button></Link>
                    <Link to='/register'><button className="main_createUser">Регистрация</button></Link>
                </main>
                <footer className="footer">
                    <p className="footer_copyright">&copy;A.R.</p>
                    <a className="footer_github_link" href="https://github.com/Xrias">Link to GitHub</a>
                </footer>
            </div>
        );
    }
}

export default Login;
