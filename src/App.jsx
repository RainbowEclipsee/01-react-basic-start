import Header from './components/Header'
import BlockItem from './components/BlockItem'
import { blocks } from './data'

function App() {
  return (
    <div>
      <Header />

      <main>
        <section>
          <h3>Blocks</h3>

          <ul>
          <BlockItem {...blocks[0]}/>
          <BlockItem {...blocks[1]}/>
          <BlockItem {...blocks[2]}/>
          <BlockItem title={blocks[3].title} description={blocks[3].description}/>
          </ul>
        </section>
        <h1>-_-</h1>
      </main>
    </div>
  )
}

export default App
