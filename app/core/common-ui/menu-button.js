let React = require('react');

class MenuButton extends React.Component {
    createId() {
        return this.props.name.split(' ').join('-').toLowerCase();
    }

    render() {
        return (
            <button id={this.createId()} onClick={this.props.onClick} >{this.props.name}</button>
        ); 
    }
}

module.exports = MenuButton;