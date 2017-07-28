let React = require('react');

let controller = require('../../models/Controller');

let Header = require('./header/header');
let Content = require('./content/content');
let Footer = require('./footer/footer');
let Popup = require('./popup');

let colors = require('../../../assets/styles/colors');

let pageStyle = {
    backgroundColor: colors.grey,
    height: '100%'
};
                    
class MainPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            actionType: undefined,
            actionName: undefined,
            showPopup: false,
            popupContents: <span>This is an average popup</span>
        };

        controller.setReactObj(this);
    }

    setAction (actionType, actionName) {
        this.setState({
            actionType,
            actionName
        });
    }

    unsetAction () {
        this.setState({
            actionType: undefined,
            actionName: undefined
        });
    }

    closePopup () {
        this.setState({
            showPopup: false
        });
    }

    render() {
        return (
            <div style={pageStyle}>
                <Header 
                    unsetAction={ () => this.unsetAction() }
                    actionName={this.state.actionName} 
                    navigate={this.props.navigate} 
                />
                <Content actionType={this.state.actionType} unsetAction = { () => this.unsetAction() } />
                <Popup showPopup={this.state.showPopup} closePopup={ () => this.closePopup() } contents={this.state.popupContents} />
                <Footer setAction={ (actionType, actionName) => this.setAction(actionType, actionName) } />
            </div>
        );
    };
};

module.exports = MainPage;