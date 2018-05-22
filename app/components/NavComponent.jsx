var React = require('react');
var {Link, IndexLink} = require('react-router');


// var NavComponent = React.createClass({
//   render: function() {
//     return (
//       <div className="top-bar nav-header">
//         <div className="top-bar-left">
//           <ul className="menu nav-inner">
//             <li className="menu-text">
//               Timer App
//             </li>
//             <li>
//               <IndexLink to="/timer" activeClassName="active">Timer</IndexLink>
//             </li>
//             <li>
//               <Link to="/countdown" activeClassName="active" activeStyle="{font-weight: bold}">
//                 Countdown Timer
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="top-bar-right">
//           <span>Created By :  James</span>
//         </div>
//       </div>
//     )
//   }
// })

var NavComponent = () => {
  return (
    <div className="top-bar nav-header">
      <div className="top-bar-left">
        <ul className="menu nav-inner">
          <li className="menu-text">
            Timer App
          </li>
          <li>
            <IndexLink to="/timer" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">
              Countdown Timer
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">Created by</li>
          <li><a href="/" target="_blank">James</a></li>
        </ul>
      </div>
    </div>
  );
}
module.exports = NavComponent;
