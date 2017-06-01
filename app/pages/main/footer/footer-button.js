let React = require('react');
let FontAwesome = require('react-fontawesome');

let colors = require('../../../../assets/styles/colors');
let shadows = require('../../../../assets/styles/shadows');

let footerButtonStyle = {
    backgroundColor: colors.red,
    border: '0 none',
    color: colors.gold,
    display: 'inline-block',
    fontSize: 40,
    height: 60,
    marginRight: 10,
    textShadow: shadows.textShadow,
    width: 60
};

class FooterButton extends React.Component{
    render () {
        return (
            <button id={this.props.id} onClick={this.props.onClick} aria-label={this.props.label} style={footerButtonStyle}>
                <FontAwesome name={this.props.icon} />
            </button>
        );
    }
};

module.exports = FooterButton;