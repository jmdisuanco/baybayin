import baybayin from '../src/baybayin'

const binaybay = document.getElementById('binaybay')
const input = document.getElementById('input')
input.addEventListener('input', (e) => {
  binaybay.innerHTML = baybayin(input.value)
})
