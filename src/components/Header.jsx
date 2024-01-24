import headerLogo from '/rocket.svg'

function Header() {

  const time = new Date()
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