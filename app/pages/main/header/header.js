let React = require('react');
let HomeButton = require('./home-button');
let CurrentAction = require('./current-action');

let headerStyle = {
    padding: 15,
    position: 'absolute',
    textAlign: 'right',
    top: 0,
    width: '100%'
};

class Header extends React.Component{
    render () {
        return (
            <div style={headerStyle}>
                <CurrentAction actionName={this.props.actionName} unsetAction={this.props.unsetAction} />
                <HomeButton navigate={this.props.navigate} />
            </div>
        );
    };
};

module.exports = Header;