import './css/main.css';
import _ from 'lodash';

let counter = 0;

function updateCounter() {
  document.getElementById('counter').innerText = `Counter: ${counter}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.innerText = 'Click Me!';
  button.addEventListener('click', _.debounce(() => {
    counter++;
    updateCounter();
  }, 300));
  
  const counterText = document.createElement('span');
  counterText.id = 'counter';
  updateCounter();

  document.body.appendChild(button);
  document.body.appendChild(counterText);

  const logo = document.createElement('div');
  logo.id = 'logo';
  document.body.prepend(logo);
});
