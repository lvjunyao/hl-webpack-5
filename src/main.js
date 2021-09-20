import './style.css'
import Icon from './images/1.png'

function component () {
  const element = document.createElement('div')
  element.innerHTML = 'test'
  element.classList.add('hello');
  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element
}

document.body.appendChild(component())