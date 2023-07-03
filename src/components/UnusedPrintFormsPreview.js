import { useRef } from 'react'

import { useSelector } from 'react-redux'

import UnusedPrintForm from './UnusedPrintForm'
import ScrollMarker from '../UI/ScrollMarker'

import styles from './UnusedPrintFormsPreview.module.css'

function UnusedPrintFormsPreview() {
  const upfHeightAsRem = 7 //высота превьюшек неиспользованных форм в единицах Rem !!!

  const scrollRef = useRef()

  const unusedPrintForms = useSelector(
    (state) => state.printForms.unusedPrintForms
  )

  const remToPx = useSelector((state) => state.uiScale.remToPx)

  const maxHeightToScale = () => {
    return unusedPrintForms.length > 0
      ? (remToPx * upfHeightAsRem) / unusedPrintForms[0].height
      : 1
  }

  return (
    <div className={styles.UnusedPrintFormsPreview}>
      <div ref={scrollRef} className={styles.scrollContainer}>
        {unusedPrintForms.map((formObj) => (
          <UnusedPrintForm
            key={formObj.id}
            {...formObj}
            localScale={maxHeightToScale()}
          />
        ))}
      </div>
      <ScrollMarker />
    </div>
  )
}

export default UnusedPrintFormsPreview
