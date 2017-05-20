let React = require('react');

// Pages
let SplashPage = require('../pages/splash/splash-page');
let HomePage = require('../pages/home/home-page');

let style = {
    background: 'url("../images/red-leather.jpg")',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
};

class Router extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            route: 'splash'
        };

        this.routes = {
            splash: <SplashPage navigate={(route) => this.navigate(route)} subtitle={this.props.options.subtitle} />,
            home: <HomePage navigate={(route) => this.navigate(route)} />
        };
    }

    navigate(newRoute) {
        this.setState({
            route: newRoute
        });
    }

    render() {
        return (
            <div style={style}>{this.routes[this.state.route]}</div>
        );
    }
};

module.exports = Router;