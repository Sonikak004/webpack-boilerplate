import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.classList.add('hello');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
  
    return element;
  }

  document.body.appendChild(component());