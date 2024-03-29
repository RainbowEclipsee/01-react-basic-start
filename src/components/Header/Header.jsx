import { useState } from 'react'
import headerLogo from '/rocket.svg'
import './Header.css'
import styled from 'styled-components'
import { useEffect } from 'react'

const HeaderCountainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`

function Header() {

  const[time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)

    return() => {
      clearInterval(interval)
    }
  }, [])



  const logoName = 'rocket'
  return (
    <HeaderCountainer>
      <img src={headerLogo} alt={logoName}></img>
      <h2>Head</h2>
      <span>Время: { time.toLocaleTimeString()}</span>
    </HeaderCountainer>
  )
}

export default Header