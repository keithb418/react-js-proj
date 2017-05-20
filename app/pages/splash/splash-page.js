let React = require('react');
let FontAwesome = require('react-fontawesome');
let MenuButton = require('../../core/common-ui/menu-button');

let colors = require('../../../assets/styles/colors.js');
let shadows = require('../../../assets/styles/shadows.js');

let pageStyle = {
    color: colors.gold,
    textAlign: 'center',
    textShadow: shadows.textShadow
};

let h1Style = {
    borderBottom: '4px solid',
    fontSize: 60,
    margin: '0 auto',
    padding: 15,
    width: 'calc(100% - 100px)'
};

let h2Style = {
    fontSize: 30
};

let iconStyle = {
    borderRadius: '100%',
    border: `4px solid ${colors.gold}`,
    boxShadow: shadows.boxShadow,
    fontSize: 100,
    padding: 25
};

class SplashPage extends React.Component{
    constructor(props) {
        super();

        this.goToHomePage.bind(this);
    }

    goToHomePage() {
        this.props.navigate("home");
    }

    render() {
        return (
            <div style={pageStyle}>
                <h1 style={h1Style}>Sherlock Holmes</h1>
                <h2 style={h2Style}>{this.props.subtitle}</h2>
                <div aria-label="Sherlock Holmes Image">
                    <FontAwesome
                        name="search"
                        style={iconStyle}
                    />
                </div>
                <MenuButton name="Start" onClick={() => this.props.navigate('home')} />
            </div>
        );
    }
}

module.exports = SplashPage;