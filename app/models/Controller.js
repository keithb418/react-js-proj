let gameOptions = require('../game-options.json');

let Inventory = require('./Inventory');

class Controller {
    constructor() {
        this.inventory = new Inventory(gameOptions.inventory);

        this.items = [];

        this.people = [];

        this.places = [];

        this.cutscenes = [];
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