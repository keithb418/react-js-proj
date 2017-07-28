let React = require('react');

let utils = require('../../../core/utils');
let controller = require('../../../models/Controller');

let RoomItemButton = require('./room-item-button');

let item = {
    id: 'violin',
    name: 'Violin',
    description: 'A fine hand-made violin with a beautiful red-brown finish.  It has been well maintained.',
    roomDescription: 'A {name} rests on a stool in the corner.'
};

class RoomItem extends React.Component{
    performAction () {
        controller.performAction(item);
    }

    getDescription () {
        var descPieces = utils.splitDescription(item.roomDescription);

        descPieces.splice(1, 0, <RoomItemButton key={item.id} active={this.props.active} id={item.id} name={item.name} performAction={ () => this.performAction() } />);

        return descPieces;
    }

    render () {
        return (
            <span>{this.getDescription()}</span>
        );
    }
};

module.exports = RoomItem;