let React = require('react');

let FooterButton = require('./footer-button');

class GoButton extends React.Component{
    startGo () {
        alert('Go Started');
    }

    render () {
        return (
            <FooterButton 
                id="go" 
                label="select to go somewhere else"
                icon="share"
                onClick={ () => this.startGo() }
            />
        );
    };
};

module.exports = GoButton;