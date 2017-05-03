var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// same as destructuring
// var Route = require('react-router').Route;

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples'); 

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();


// App css
require('style!css!sass!applicationStyles');



ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            
            <Route path="about" component={About}>
            </Route>

            <Route path="examples" component={Examples}>
            </Route>

            <IndexRoute component={Weather}>
            </IndexRoute>

        </Route>
    </Router>,
    document.getElementById('app')
);