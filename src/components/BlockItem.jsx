function BlockItem({ title, description }) {
  return (
    <div>
      <li>
        <p>
          <strong>{title}</strong>
          {description}
        </p>
      </li>
    </div>
  )
}

export default BlockItem
