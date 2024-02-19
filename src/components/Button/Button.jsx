import './Button.css'

function Button({ children, isActive, ... props}) {
  return (
    <button
      {...props}
      className={isActive ? 'button active' : 'button'}
    >
      {children}
    </button>
  )
}

export default Button
