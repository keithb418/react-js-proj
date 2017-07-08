let React = require('react');

let utils = require('../../../core/utils');

let buttonStyles = {
    background: 'transparent',
    border: '0 none',
    cursor: 'none',
    fontSize: '1em',
    fontWeight: 'bold',
    padding: 0
}

let highlight = '#00ffff';

let highlightStyles = {
    border: '2px solid #00ffff',
    borderRadius: 5, 
    boxShadow: '0 0 5px #00ffff',
    cursor: 'pointer',
    padding: 2
}

let styles = {};

class RoomItemButton extends React.Component{
    getStyles () {
        return this.active ? utils.extend({}, buttonStyles, highlightStyles) : utils.extend({}, buttonStyles);
    }

    render () {
        return (
            <button id={this.props.id} style={this.getStyles()}>{this.props.name}</button>
        );
    }
};

module.exports = RoomItemButton;