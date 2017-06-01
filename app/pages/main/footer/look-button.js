let React = require('react');

let FooterButton = require('./footer-button');

class LookButton extends React.Component{
    startLook () {
        alert('Look Started');
    }

    render () {
        return (
            <FooterButton 
                id="look" 
                label="select to look at something"
                icon="search"
                onClick={ () => this.startLook() }
            />
        );
    };
};

module.exports = LookButton;