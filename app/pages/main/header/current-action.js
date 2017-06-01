let React = require('react');
let FontAwesome = require('react-fontawesome');

let colors = require('../../../../assets/styles/colors');
let shadows = require('../../../../assets/styles/shadows');

let currentActionStyle = {
    backgroundColor: colors.red,
    border: '0 none',
    boxShadow: shadows.boxShadow,
    color: colors.gold,
    fontSize: '25px',
    fontWeight: 'bold',
    height: 50,
    padding: 10,
    paddingLeft: 35,
    position: 'absolute',
    textAlign: 'left',
    top: 15,
    transition: 'visibility 300ms, opacity 300ms, left 300ms', 
    width: 'calc(100% - 60px)'
};

let closeActionStyle = {
    color: colors.darkRed,
    fontSize: 30,
    position: 'absolute',
    right: 10,
    textShadow: shadows.textShadow,
    top: 10
};

class CurrentAction extends React.Component{
    getClass () {
        return this.props.actionName ? 'visible-action' : 'invisible-action';
    }

    render () {
        return (
            <button aria-label="Select to Close" className={this.getClass()} style={currentActionStyle} onClick={this.props.unsetAction} >
                {this.props.actionName}
                <FontAwesome name="times" style={closeActionStyle} />
            </button>
        );
    };
};

module.exports = CurrentAction;