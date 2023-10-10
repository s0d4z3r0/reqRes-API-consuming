import styles from './Cards.module.css'

const Cards = ({user}) => {
  return (
    <div className={styles.cards}>  
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <img src={user.avatar} alt={`Imagem avatar ID ${user.id}`} />
      <p><strong>Contact:</strong> {user.email}</p>
    </div>
  )
}

export default Cards