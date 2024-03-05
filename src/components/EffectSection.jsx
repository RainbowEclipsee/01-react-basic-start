import { useState, useEffect, useCallback } from 'react'
import useInput from '../hooks/useInput.js'
import Button from './Button/Button.jsx'
import Modal from './Modal/Modal'

export default function EffectSection() {
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  function openModal() {
    setModal(true)
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button style={{ marginBottom: '1rem' }} onClick={openModal}>
        Открыть информацию
      </Button>

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

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  )
}
