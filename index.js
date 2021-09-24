window.addEventListener('load', () => createResultArea())
window.removeEventListener('load', () => createResultArea())

function createResultArea() {
  const wrapper = document.querySelector('.wrapper')
  const div = document.createElement('div')
  const p = document.createElement('p')

  wrapper.appendChild(div)
  div.appendChild(p)

  div.classList.add('scrambledText')
  div.classList.add('box')
}

function scrambleText() {
  const textarea = document.querySelector('textarea')
  if (!textarea.value) return

  const arrayText = textarea.value.split(' ')
  const length = arrayText.length

  let scrambledText = []

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * length - i)
    const removedWord = arrayText.splice(randomIndex, 1)
    scrambledText.push(removedWord)
  }

  document.querySelector('p').innerText = `${scrambledText.join(' ')}.`
}
