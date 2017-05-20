let React = require('react');

// Pages
let SplashPage = require('../pages/splash/splash-page');
let HomePage = require('../pages/home/home-page');

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
            <div className="page">{this.routes[this.state.route]}</div>
        );
    }
};

module.exports = Router;