import './Button.css'

function Button({ children, btnClick }) {
  return (
    <button className="button active" onClick={btnClick}>
      {children}
    </button>
  )
}

export default Button
