import _ from 'lodash';
import './css/style.css';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'Webpack', '!'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
