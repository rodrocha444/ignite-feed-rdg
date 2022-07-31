import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images3.alphacoders.com/118/thumb-1920-118199.jpg"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/rodrocha444.png"/>

        <strong>Nome</strong>
        <span>Profissao</span>

      </div>

      <footer>

        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}