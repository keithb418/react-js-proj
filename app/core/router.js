let React = require('react');

let controller = require('../models/Controller');

// Pages
let SplashPage = require('../pages/splash/splash-page');
let HomePage = require('../pages/home/home-page');
let MainPage = require('../pages/main/main-page');

let style = {
    height: window.innerHeight  
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
            splash: <SplashPage navigate={handleRoute} subtitle={controller.subtitle} />,
            home: <HomePage navigate={handleRoute} />,
            main: <MainPage navigate={handleRoute} />
        };
    }

    navigate(route) {
        this.setState({
            route
        });
    }

    render() {
        return (
            <div style={style}>{this.routes[this.state.route]}</div>
        );
    }
};

module.exports = Router;