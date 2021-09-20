import './style.css'
import Icon from './images/1.png'
import Data from './data/data.xml';
import Notes from './data/data.csv';

function component () {
  const element = document.createElement('div')
  element.innerHTML = 'test'
  element.classList.add('hello');
  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);
  return element
}

document.body.appendChild(component())