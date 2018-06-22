import React from 'react';
import Chat from '../components/chat.js';
import Contacts from '../components/contact.js';
import Controls from '../components/controls.js'
import '../static/css/app.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Controls />
                <Contacts />
                <Chat name="Миша Левшин" timeOfLastVisit="Был в сети час назад"/>
            </div>
        );
    }
}

export default App;
