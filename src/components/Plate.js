import PrintForm from './PrintForm'
import PlateWorkArea from './PlateWorkArea'

import styles from './Plate.module.css'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import { plateScaleSelector } from '../store/slices/plateScaleSlice'

import ActionButtonMedium from '../UI/ActionButtonMedium'

import { BiLockAlt, BiLockOpenAlt } from 'react-icons/bi'

function Plate({ data, largeView }) {
  const plateSize = { width: 1067, height: 800 }

  const plateScale = useSelector(plateScaleSelector.getPlateScale)

  return (
    <div className={styles.plateWrapper}>
      <div
        className={styles.Plate}
        style={{
          width: `${plateSize.width}px`,
          height: `${plateSize.height}px`,
          scale: `${plateScale}`,
        }}
      >
        <PlateWorkArea />
        {data.map((form) => (
          <PrintForm key={nanoid(3)} {...form} />
        ))}

        <div className={styles.lockerScreen} />
        {largeView && (
          <div className={styles.controlsSection}>
            <ActionButtonMedium
              title="Заблокировать пластину"
              action={() => {
                console.log('Заблокировать пластину')
              }}
            >
              <BiLockAlt />
            </ActionButtonMedium>
          </div>
        )}
      </div>
    </div>
  )
}

export default Plate
