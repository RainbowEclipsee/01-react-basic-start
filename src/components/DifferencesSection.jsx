import Button from "./Button/Button.jsx"
import { useState } from "react"
import { differences } from '../data'


export default function DifferencesSection(){

  const [content, setContent] = useState(null)

  function handleClick(differences) {
    console.log('Button clicked: ', differences)
    setContent(differences)
  }

  return (
    <section>
    <h3>Отличия от других</h3>
    <Button isActive={content === 'way'} onClick={() => handleClick('way')}>click me 1</Button>
    <Button isActive={content === 'easy'} onClick={() => handleClick('easy')}>click me 2</Button>
    <Button isActive={content === 'program'} onClick={() => handleClick('program')}>click me 3</Button>

    {!content && <p>Нажми на кнопку</p>}
    {content && <p>{differences[content]}</p>}
  </section>
  )
}