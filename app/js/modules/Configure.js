const React = require('react');
const $ = require('jquery');
const Color = require("../util/Color");

var Configure = React.createClass({
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div className = "container" >
                {this.props.message}
            </div>
        );
    }
});

module.exports = Configure;
