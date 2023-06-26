import styles from './Header.module.css'
import ActionButtonMedium from '../UI/ActionButtonMedium'
import ActionButton from '../UI/ActionButton'
import { BiZoomIn, BiZoomOut, BiExpand, BiDownload } from 'react-icons/bi'

import { useDispatch } from 'react-redux'
import { zoomPlate } from '../store/slices/plateScaleSlice'

function Header(props) {
  const dispatch = useDispatch()

  const zoomInAction = () => {
    dispatch(zoomPlate(0.1))
  }
  const zoomOutAction = () => {
    dispatch(zoomPlate(-0.1))
  }
  const fullSizeAction = () => {
    console.log('FullSize')
  }

  return (
    <div className={styles.Header}>
      <ActionButton title="Get data" action={() => {}}>
        <BiDownload />
        <span className={styles.buttonTitle}>Load data</span>
      </ActionButton>
      <div className={styles.ScaleButtonsWrapper}>
        <ActionButtonMedium title="Zoom out" action={zoomOutAction}>
          <BiZoomOut />
        </ActionButtonMedium>

        <ActionButtonMedium title="Full size" action={fullSizeAction}>
          <BiExpand />
        </ActionButtonMedium>

        <ActionButtonMedium title="Zoom in" action={zoomInAction}>
          <BiZoomIn />
        </ActionButtonMedium>
      </div>
    </div>
  )
}

export default Header
