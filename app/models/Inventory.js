class Inventory {
    constructor(inventory) {
        this.inventory = inventory;
    }

    addItem(item) {
        this.inventory.push(item);
    }

    removeItem(item) {
        var itemIndex = this.inventory.indexOf(item);

        this.inventory = this.inventory.splice(itemIndex, 1);
    }
};

module.exports = Inventory;