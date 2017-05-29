let React = require('react');

// Pages
let SplashPage = require('../pages/splash/splash-page');
let HomePage = require('../pages/home/home-page');
let MainPage = require('../pages/main/main-page');

let style = {
    height: window.outerHeight  
};

class Router extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            route: 'splash'
        };

        let handleRoute = (route) => {
            this.navigate(route);
        };

        this.routes = {
            splash: <SplashPage navigate={handleRoute} subtitle={this.props.options.subtitle} />,
            home: <HomePage navigate={handleRoute} />,
            main: <MainPage navigate={handleRoute} options={this.props.options} />
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