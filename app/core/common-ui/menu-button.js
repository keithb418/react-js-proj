let React = require('react');

let colors = require('../../../assets/styles/colors');
let shadows = require('../../../assets/styles/shadows.js');
let utils = require('../utils');

let style = {
    background: 'transparent',
    border: `4px solid ${colors.gold}`,
    borderRadius: 10,
    boxShadow: shadows.boxShadow,
    color: colors.gold,
    display: 'block',
    fontSize: 30,
    fontWeight: 'bold',
    margin: '15px auto 0 auto',
    padding: 15,
    textShadow: shadows.textShadow,
    width: 200
};

class MenuButton extends React.Component {
    createId() {
        return this.props.name.split(' ').join('-').toLowerCase();
    }

    render() {
        style = utils.extend(style, this.props.style);

        return (
            <button style={style} id={this.createId()} onClick={this.props.onClick} >{this.props.name}</button>
        ); 
    }
}

module.exports = MenuButton;