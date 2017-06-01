let React = require('react');

let FooterButton = require('./footer-button');

class TalkButton extends React.Component{
    startTalk () {
        this.props.setAction('talk', 'Talk To...');
    }

    render () {
        return (
            <FooterButton 
                id="talk" 
                label="select to talk to someone"
                icon="comment"
                onClick={ () => this.startTalk() }
            />
        );
    };
};

module.exports = TalkButton;