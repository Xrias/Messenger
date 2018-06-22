import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login.js';
import App from './pages/app.js';
import { BrowserRouter, Route } from 'react-router-dom';

const Index = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/app" component={App} />
        </div>
    </BrowserRouter>
  );

ReactDOM.render(<Index />, document.getElementById('root'));

