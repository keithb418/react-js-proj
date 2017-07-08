let React = require('react');

let utils = require('../../../core/utils');
let RoomItemButton = require('./room-item-button');

let item = {
    id: 'violin',
    name: 'Violin',
    description: 'A fine hand-made violin with a beautiful red-brown finish.  It has been well maintained.',
    roomDescription: 'A {name} rests on a stool in the corner.'
};

class RoomItem extends React.Component{
    getDescription () {
        var descPieces = utils.splitDescription(item.roomDescription);

        descPieces.splice(1, 0, <RoomItemButton key={item.id} id={item.id} name={item.name}/>);

        return descPieces;
    }

    render () {
        return (
            <span>{this.getDescription()}</span>
        );
    }
};

module.exports = RoomItem;