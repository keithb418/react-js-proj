let React = require('react');

let HelpButton = require('./help-button');
let LookButton = require('./look-button');
let TalkButton = require('./talk-button');
let PickUpButton = require('./pick-up-button');
let GoButton = require('./go-button');
let InventoryButton = require('./inventory-button');
let WatsonButton = require('./watson-button');

let colors = require('../../../../assets/styles/colors');

let footerStyle = {
    backgroundColor: colors.red,
    minWidth: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap'
};

class Footer extends React.Component{
    render () {
        return (
            <div style={footerStyle}>
                <HelpButton />
                <LookButton 
                    setAction={this.props.setAction}
                />
                <TalkButton
                    setAction={this.props.setAction} 
                />
                <PickUpButton
                    setAction={this.props.setAction} 
                />
                <InventoryButton />
                <GoButton />
                <WatsonButton />
            </div>
        );
    }
};

module.exports = Footer;