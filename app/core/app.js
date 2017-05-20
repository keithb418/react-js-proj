let React = require('react');
let GameOptions = require('./game-options');
let Router = require('./router');

class App extends React.Component {
    render() {
        return (
            <Router options={GameOptions} />
        );
    }
};

module.exports = App;