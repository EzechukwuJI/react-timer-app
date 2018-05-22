var ReactDOM  =  require('react-dom');
var React  =  require('react');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');
var CountDown = require('CountDown');
var Timer = require('Timer');

// load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history = {hasHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={CountDown}></Route>
      <Route path="Timer" component={Timer}></Route>
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
