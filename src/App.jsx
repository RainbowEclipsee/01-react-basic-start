import Header from './components/Header'
import BlockItem from './components/BlockItem.jsx'
import Button from './components/Button/Button.jsx'
import { blocks, differences} from './data'

function App() {

  function handleClick(differences) {
    console.log('Button clicked: ', differences)
  }

  return (
    <div>
      <Header />

      <main>
        <section>
          <h3>Blocks</h3>

          <ul>
            <BlockItem {...blocks[0]} />
            <BlockItem {...blocks[1]} />
            <BlockItem {...blocks[2]} />
            <BlockItem
              title={blocks[3].title}
              description={blocks[3].description}
            />
          </ul>
        </section>
        <section>
          <h3>Отличия от других</h3>
          <Button btnClick={() => handleClick(differences.way)}>click me 1</Button>
          <Button btnClick={() => handleClick(differences.easy)}>click me 2</Button>
          <Button btnClick={() => handleClick(differences.program)}>click me 3</Button>
        </section>
      </main>
    </div>
  )
}

export default App
