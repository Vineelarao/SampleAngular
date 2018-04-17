'use strict';

var React = require('react');
var Input = require('../../common/textinput');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        error: React.PropTypes.object
    },
    render: function () {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input
                       name="firstName"
                       label="firstname"
                       onChange={this.props.onChange}
                       value={this.props.author.firstName}
                       error = {this.props.errors.firstName}
                />
                <br/>
                <Input
                       name="lastName"
                       label="lastName"
                       onChange={this.props.onChange}
                       value={this.props.author.lastName}
                       error = {this.props.errors.lastName}
                />
                <br/>

                <input type="submit" value="save" className="btn btn-primary" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = AuthorForm;