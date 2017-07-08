var utils = require('../core/utils');

class Item {
    constructor(item) {
        utils.extend(this, item);
    }

    getRoomDescription() {
        let roomDescription = this.roomDescription || '';

        return (utils.substituteItem(roomDescription, `<button id='${this.id}'>${this.name}</button>`));
    }
}

module.exports = Item;