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

function generateScrambledText() {
  const textarea = document.querySelector('textarea')
  if (!textarea.value) return

  const arrayText = textarea.value.split(' ')
  const length = arrayText.length
  const scrambledText = scrambleText(arrayText, length)

  const p = document.querySelector('p')
  p.innerText = scrambledText.join(' ') + '.'
}

function scrambleText(array, length) {
  let scrambledText = []
  let arrayText = array

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * length - i)
    const removedWord = arrayText.splice(randomIndex, 1)[0]

    const word = checkAndChange(i, length, removedWord.split(''), scrambledText)
    scrambledText.push(word)
  }

  return scrambledText
}

function checkAndChange(i, length, wordInArray, scrambledText) {
  if (i === 0) {
    wordInArray[0] = wordInArray[0].toUpperCase()
    return wordInArray.join('')
  }

  const previousWord = scrambledText[i - 1].split('')
  const previousWordLastCharacter = previousWord[previousWord.length - 1]
  if (previousWordLastCharacter === '.') {
    wordInArray[0] = wordInArray[0].toUpperCase()
  }

  const currentWordLastCharacter = wordInArray[wordInArray.length - 1]
  if (i === length - 1) {
    if (currentWordLastCharacter === '.' || currentWordLastCharacter === ',') {
      wordInArray.pop()
    }
  }

  return wordInArray.join('')
}
