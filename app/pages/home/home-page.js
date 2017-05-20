let React = require('react');
let MenuButton = require('../../core/common-ui/menu-button');

class HomePage extends React.Component{
    startGame() {
        alert("This will take you to the main Game screen for now");
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

    render () {
        return (
            <div className="home">
                <MenuButton name="New" onClick={this.startGame} />
                <MenuButton name="Continue" onClick={this.continue} />
                <MenuButton name="Quit" onClick={() => this.quit()} />
            </div>
        );
    }
}

module.exports = HomePage;