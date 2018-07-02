import React from 'react';
import Menu from '../components/menu.js'
import '../static/css/controls.css';

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.visibleOff = `.menu { visibility: hidden;}`
        this.visibleOn = `.menu { visibility: visible;}`
        this.showMenu = this.showMenu.bind(this);
        this.state = {menuVisible: false};
    }

    showMenu() {
        this.setState({menuVisible: !this.state.menuVisible});
    }
    
    render() {
        return (
            <div className="controls">
                <div onClick={this.showMenu} className="controls_menu" />
                <input className="controls_search" />
                <Menu />
                <style media="screen">
                    {this.state.menuVisible ? this.visibleOn : this.visibleOff}
                </style>
            </div>
        );
    }
}

export default Controls;
