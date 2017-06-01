let React = require('react');

let FooterButton = require('./footer-button');

class HelpButton extends React.Component{
    showHelp () {
        alert('Help Shown');
    }

    render () {
        return (
            <FooterButton 
                id="help" 
                label="select to view help"
                icon="question"
                onClick={ () => this.showHelp() }
            />
        );
    };
};

module.exports = HelpButton;