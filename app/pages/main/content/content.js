let React = require('react');

let Paper = require('../../../core/common-ui/paper');
let Room = require('../room/room');

let contentStyle = {
    height: 'calc(100% - 60px)',
    overflowY: 'auto',
    padding: '80px 10px 30px 10px'
};

let paperStyle = {
    minHeight: '100%'
};

class Content extends React.Component{
    render () {
        let paperContents = <Room actionType={this.props.actionType} />;

        return (
            <div style={contentStyle}><Paper contents={paperContents} style={paperStyle}></Paper></div>
        );
    };
};

module.exports = Content;