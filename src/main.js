import './style.css'

function component () {
  const element = document.createElement('div')
  element.innerHTML = 'test'
  element.classList.add('hello');
  return element
}

document.body.appendChild(component())