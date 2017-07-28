let React = require('react');

let gameOptions = require('../game-config.json');

let Inventory = require('./Inventory');

class Controller {
    constructor() {
        this.inventory = new Inventory(gameOptions.inventory);

        this.actions = {
            look: this.look
        };

        this.items = [];

        this.people = [];

        this.places = [];

        this.cutscenes = [];
    }

    setReactObj(reactObj) {
        this.reactObj = reactObj;
    }

    performAction(item) {
        this.actions[this.reactObj.state.actionType].call(this, item);

        this.reactObj.unsetAction();
    }

    look(item) {
        this.reactObj.setState({
            popupContents: <span>{item.description}</span>,
            showPopup: true
        });
    }

    getItemById(id) {
        return this.getById(id, this.items.concat(this.people));
    }

    getPlaceById(id) {
        return this.getById(id, this.places);
    }

    getCutsceneById(id) {
        return this.getById(id, this.cutscenes);
    }

    getById(id, list) {
        return list.find((listItem) => {
            return listItem.id === id;
        });
    }
}

let controller = new Controller();

module.exports = controller;