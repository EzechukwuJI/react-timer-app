var React = require('react');
var Nav  = require('Nav');


// load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// add custom css
require('style!css!applicationStyles');

var Main = (props) => {
  return (
        <div>
          <Nav />
          {props.children}
        </div>
  );
}

module.exports = Main;
