let React = require('react');
let FontAwesome = require('react-fontawesome');
let Paper = require('../../core/common-ui/paper');

let colors = require('../../../assets/styles/colors');
let shadows = require('../../../assets/styles/shadows');

let popupStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '100%',
    left: 0,
    padding: 10,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: '1'
};

let paperStyle = {
    height: '100%',
    padding: '50px 10px 10px 10px',
    position: 'relative',
    width: '100%'
};

let closeStyle = {
    background: 'transparent',
    border: '0 none',
    height: 30,
    padding: 0,
    position: 'absolute',
    right: 10,
    top: 10,
    width: 30

};

let closeIconStyle = {
    color: colors.darkRed,
    fontSize: 30,
    textShadow: shadows.textShadow,
};

class Popup extends React.Component {
    getClass() {
        return this.props.showPopup ? 'visible-popup' : 'invisible-popup';
    }

    render() {
        let paperContents = <div>
            <button aria-label="Select to Close" onClick={ () => this.props.closePopup() } style={closeStyle}>
                <FontAwesome name="times" style={closeIconStyle} />
            </button>
            <div>{this.props.contents}</div>
        </div>;

        return (
            <div className={this.getClass()} style={popupStyle} >
                <Paper contents={paperContents} style={paperStyle} />
            </div>
        );
    }
};

module.exports = Popup;
