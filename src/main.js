// import printMe from './print.js'
import _ from 'lodash'
import './a.js'
console.log(_)
function component () {
  const element = document.createElement('div')
  const btn = document.createElement('button');
  element.innerHTML = 'test'
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = function () {
    import(/* webpackPrefetch: true */ './print.js').then(res => {
      console.log(res)
    })
  };

  element.appendChild(btn);
  element.classList.add('hello');
  return element
}

document.body.appendChild(component())