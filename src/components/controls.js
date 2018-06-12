import React from 'react';
import '../static/css/controls.css';

class Controls extends React.Component {
    render() {
        return (
            <div className="controls">
                <div className="controls_menu" />
                <input className="controls_search" />
            </div>
        );
    }
}

export default Controls;
