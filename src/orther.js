import _ from 'lodash'
import './a.js'

console.log(_)
import('./print.js').then(res => {
  console.log(res)
})