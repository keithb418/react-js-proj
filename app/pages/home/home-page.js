let React = require('react');
let MenuButton = require('../../core/common-ui/menu-button');
let Paper = require('../../core/common-ui/paper');

let colors = require('../../../assets/styles/colors.js');
let shadows = require('../../../assets/styles/shadows.js');

let style = {
    backgroundColor: colors.grey,
    boxSizing: 'border-box',
    height: '100%',
    padding: 10
};

let paperStyle = {
    height: 'calc(100% - 25px)',
    paddingTop: 15
};

class HomePage extends React.Component{
    startGame() {
        this.props.navigate('main');
    }

    continue() {
        alert("Can't continue progress if you can't save your progress!");
    }

    quit() {
        if (navigator.app) {
            navigator.app.exitApp();
        } else {
            this.props.navigate('splash');
        }
    }

    buildMenuList () {
        let menuButtons = [
            {
                name: 'New',
                callback: () => this.startGame()
            },
            {
                name: 'Continue',
                callback: () => this.continue()
            },
            {
                name: 'Quit',
                callback: () => this.quit()
            }
        ];

        let menuList = [];

        menuButtons.forEach((menuButton, i) => {
            menuList.push(<MenuButton key={`menuBtn${i}`} name={menuButton.name} onClick={menuButton.callback} />);
        });

        return menuList;
    }

    render () {
        return (
            <div style={style}>
                <Paper contents={this.buildMenuList()} style={paperStyle} />
            </div>
        );
    }
}

module.exports = HomePage;