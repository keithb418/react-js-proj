let React = require('react');

let FooterButton = require('./footer-button');

class WatsonButton extends React.Component{
    askWatson () {
        alert('Watson Consulted');
    }

    render () {
        return (
            <FooterButton 
                id="watson" 
                label="select to consult Watson"
                icon="user"
                onClick={ () => this.askWatson() }
            />
        );
    };
};

module.exports = WatsonButton;