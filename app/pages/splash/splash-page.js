let React = require('react');
let FontAwesome = require('react-fontawesome');
let MenuButton = require('../../core/common-ui/menu-button');


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
            <div className="splash">
                <h1>Sherlock Holmes</h1>
                <h2>{this.props.subtitle}</h2>
                <div aria-label="Sherlock Holmes Image">
                    <FontAwesome
                        name="search"
                    />
                </div>
                <MenuButton name="Start" onClick={() => this.props.navigate('home')} />
            </div>
        );
    }
}

module.exports = SplashPage;