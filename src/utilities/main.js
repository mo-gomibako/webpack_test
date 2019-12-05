import { join } from 'lodash'

const mainHeader = () => {
  const header = document.createElement('h1')
  const headerTexts = ['Hello', 'world', '!!']
  header.innerText = join(headerTexts, ' ')
  // header.innerText = `${headerTexts[0]} ${headerTexts[1]}`

  return header
}

const root = document.querySelector("#root")
root.appendChild(mainHeader())