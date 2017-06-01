let React = require('react');

let Header = require('./header/header');
let Content = require('./content/content');
let Footer = require('./footer/footer');

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
            actoinName: undefined
        };
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

    render() {
        return (
            <div style={pageStyle}>
                <Header 
                    unsetAction={ () => this.unsetAction() }
                    actionName={this.state.actionName} 
                    navigate={this.props.navigate} 
                />
                <Content actionType={this.state.actionType} />
                <Footer setAction={ (actionType, actionName) => this.setAction(actionType, actionName) } />
            </div>
        );
    };
};

module.exports = MainPage;