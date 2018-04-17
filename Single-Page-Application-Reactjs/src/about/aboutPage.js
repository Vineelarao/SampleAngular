"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
      willTransitionTo: function (transition, params, query, callback) {
            if(!confirm('Are you sure you want to read a page that is booring')){
                transition.abort();
            } else {
                callback();
            }
      },
      willTransitionFrom: function (transition, component) {
            if(!confirm('Are you sure you want to leave a page that is exciting')){
                transition.abort();
            }
        }
    },
    render: function() {
        return (
            <div>
                <h1>Abougt page</h1>
                <p>List of Technologies</p>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                    </ul>
            </div>
        );
    }
});

module.exports = About;