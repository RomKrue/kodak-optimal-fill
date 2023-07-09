import styles from './Login.module.css'
import ActionButton from '../UI/ActionButton'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineEye } from 'react-icons/ai'

function Login() {
  return (
    <div className={styles.loginContainer}>
      <ActionButton>
        <BiEdit />
        Оператор
      </ActionButton>
      <ActionButton>
        <AiOutlineEye />Я только посмотреть
      </ActionButton>
    </div>
  )
}

export default Login
