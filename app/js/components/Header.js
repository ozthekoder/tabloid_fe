const React = require('react');
const $ = require('jquery');
const Color = require("../util/Color");
const Modal = require("./Modal");
const Configure = require("../modules/Configure");

var Header = React.createClass({
    componentDidMount: function () {

    },
    renderMenu() {

        let id = "configuration-modal";
        let action = {
            label: "Save",
            callback: (message) => {
                console.log(message);
            }
        }

        let configuration = <Configure message="mina gorum yo" />;
        return (
            <ul>
                <li>
                    <button className="button">Add New..</button>
                </li>
                <li>
                    <label htmlFor={id} className="button">Configure</label>
                    <Modal action={action} id={id}>
                        <Configure message="mina gorum yo" />
                    </Modal>
                </li>
                <li>
                    <button className="button">Save</button>
                </li>
            </ul>
        );
    },
    render: function () {
        return (
            <div className="container header" >
                {this.renderMenu()}
            </div>
        );
    }
});

module.exports = Header;
