let React = require('react');
let FontAwesome = require('react-fontawesome');

let colors = require('../../../../assets/styles/colors');
let shadows = require('../../../../assets/styles/shadows');

let homeButtonStyle = {
    backgroundColor: colors.red,
    border: `4px solid ${colors.gold}`,
    borderRadius: 10,
    boxShadow: shadows.boxShadow,
    color: colors.gold,
    fontSize: 35,
    height: 50,
    width: 50
};

class HomeButton extends React.Component{
    render () {
        return (
            <button aria-label="Go to the Home Menu" style={homeButtonStyle}>
                <FontAwesome name="home" />
            </button>
        );
    };
};

module.exports = HomeButton;