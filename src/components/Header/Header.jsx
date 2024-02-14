import { useState } from 'react'
import headerLogo from '/rocket.svg'
import './Header.css'

function Header() {

  const[time, setTime] = useState(new Date())

  setInterval(() => setTime(new Date()), 1000)

  const logoName = 'rocket'
  return (
    <header>
      <img src={headerLogo} alt={logoName}></img>
      <h2>Head</h2>
      <span>Время: { time.toLocaleTimeString()}</span>
    </header>
  )
}

export default Header