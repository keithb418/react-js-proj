let React = require('react');

let FooterButton = require('./footer-button');

class PickUpButton extends React.Component{
    startPickUp () {
        alert('Pick Up Started');
    }

    render () {
        return (
            <FooterButton 
                id="pick-up" 
                label="select to pick something up"
                icon="hand-paper-o"
                onClick={ () => this.startPickUp() }
            />
        );
    };
};

module.exports = PickUpButton;