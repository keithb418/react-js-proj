let React = require('react');

let colors = require('../../../assets/styles/colors');
let shadows = require('../../../assets/styles/shadows');
let utils = require('../utils');

let style = {
    backgroundImage: 'url("../images/Old_paper6.jpg")',
    boxShadow: shadows.boxShadow,
    color: colors.ink,
    fontSize: '1.25em',
    lineHeight: '1.5em',
    padding: 10
};

class Paper extends React.Component{
    render () {
        let paperStyle = utils.extend({}, style, this.props.style);

        return (
            <div style={paperStyle}>
                {this.props.contents}
            </div>
        );
    }
};

module.exports = Paper;