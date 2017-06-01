let React = require('react');

let FooterButton = require('./footer-button');

class InventoryButton extends React.Component{
    showInventory () {
        alert('Inventory Shown');
    }

    render () {
        return (
            <FooterButton 
                id="inventory" 
                label="select to view inventory"
                icon="suitcase"
                onClick={ () => this.showInventory() }
            />
        );
    };
};

module.exports = InventoryButton;