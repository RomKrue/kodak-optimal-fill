import styles from './PlatesPreviewList.module.css'

import { nanoid } from 'nanoid'

import Plate from './Plate'

function PlatesPreviewList({ data }) {
  return (
    <div className={styles.PlatesPreviewList}>
      {data.map((plate) => (
        <Plate key={nanoid(3)} />
      ))}
    </div>
  )
}

export default PlatesPreviewList
