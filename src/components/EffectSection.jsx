import { useState } from 'react'
import Button from './Button/Button.jsx'
import Modal from './Modal/Modal'

export default function EffectSection() {
  const [modal, setModal] = useState(false)
  
  function openModal() {
    setModal(true)
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          corporis itaque placeat aliquid ipsum repudiandae odit ea modi illo
          magnam error at, ut deleniti sunt, tempora, molestias dicta. Mollitia,
          neque.
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  )
}
