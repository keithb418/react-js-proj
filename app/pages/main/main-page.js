let React = require('react');

let Header = require('./header/header');
let Content = require('./content/content');
let Footer = require('./footer/footer');

let colors = require('../../../assets/styles/colors');

let pageStyle = {
    backgroundColor: colors.grey,
    height: '100%'
};
                    
class MainPage extends React.Component{
    render() {
        return (
            <div style={pageStyle}>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    };
};

module.exports = MainPage;