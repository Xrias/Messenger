import React from 'react';
import Chat from '../components/Chat.js';
import Contacts from '../components/Contact.js';
import '../static/css/App.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="controls">
                    <div className="controls_menu">
                    </div>
                    <input className="controls_search" />
                </div>
                <Contacts />
                <Chat />
            </div>
        );
    }
}

export default App;
