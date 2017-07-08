let React = require('react');

let utils = require('../../../core/utils');

let RoomItem = require('./room-item');

let roomDesc = 'You are in the sitting room of your flat at 221B Baker St.  It is a modest, comfortable room with several armchairs and a blazing fire.  {violin}';

class Room extends React.Component{
    getDescription () {
        let roomItems = utils.getSubstituteIds(roomDesc);
        let roomDescPieces = utils.splitDescription(roomDesc);
        let roomDescArray = [];

        roomDescPieces.forEach((piece, i) => {
            roomDescArray.push(piece);
            if (roomItems[i]) {
                roomDescArray.push(<RoomItem key={'room-item-' + i} />);
            }
        });

        return roomDescArray;
    }

    render () {
        return (
            <p>{this.getDescription()}</p>
        );
    }
};

module.exports = Room;