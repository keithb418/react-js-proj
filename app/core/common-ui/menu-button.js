let React = require('react');
let FontAwesome = require('react-fontawesome');

let colors = require('../../../assets/styles/colors');
let shadows = require('../../../assets/styles/shadows.js');
let utils = require('../utils');

let style = {
    background: 'transparent',
    border: '0 none',
    color: colors.ink,
    display: 'block',
    fontSize: 30,
    fontWeight: 'bold',
    margin: '0 auto 15px auto',
    padding: 15,
    textDecoration: 'underline'
};

class MenuButton extends React.Component {
    createId() {
        return this.props.name.split(' ').join('-').toLowerCase();
    }

    render() {
        let buttonStyle = utils.extend({}, style, this.props.style);

        return (
            <button style={buttonStyle} id={this.createId()} onClick={this.props.onClick} >
                * {this.props.name} *
            </button>
        ); 
    }
}

module.exports = MenuButton;