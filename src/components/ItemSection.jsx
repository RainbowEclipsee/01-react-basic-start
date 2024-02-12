import BlockItem from './BlockItem.jsx'
import {blocks} from '../data'

function ItemSection() {
  return (
    <section>
      <h3>Blocks</h3>
      <ul>
        {blocks.map((block) => (<BlockItem key={block.title} {...block} />))}
      </ul>
    </section>
  )
}

export default ItemSection