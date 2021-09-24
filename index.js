const textarea = document.querySelector('textarea')

function scrambleWords() {
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
