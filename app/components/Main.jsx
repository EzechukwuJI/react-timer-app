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
          <div className="row">
            <div className="column small-centered medium-6 large-4">
              {props.children}
            </div>
          </div>
        </div>
  );
}

module.exports = Main;
