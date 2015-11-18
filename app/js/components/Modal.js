const React = require('react');
const $ = require('jquery');

var Modal = React.createClass({
    componentDidMount: function () {

    },
    renderTitle() {
        let title = this.props.title
        if(title) {
            return (<h3>Great offer</h3>)
        }
    },
    render: function () {
        return (
            <div className="modal">
                <input id={this.props.id} type="checkbox" />
                <label htmlFor={this.props.id} className="overlay"></label>
                <article>
                    <header>
                        {this.renderTitle()}
                        <label htmlFor={this.props.id} className="close">&times;</label>
                    </header>
                    <section className="content">
                        {this.props.children}
                    </section>
                    <footer>
                        <button className="button" onClick={this.props.action.callback.bind(null, this.props.id)}>{this.props.action.label}</button>
                        <label htmlFor={this.props.id} className="button dangerous">
                            Cancel
                        </label>
                    </footer>
                </article>
            </div>
        );
    }
});

module.exports = Modal;
