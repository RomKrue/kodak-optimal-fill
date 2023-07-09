import { useDispatch } from 'react-redux'
import { updateRawPrintForms } from './store/slices/printFormsSlice'

import { useRef, useEffect } from 'react'

import './App.css'
import Header from './components/Header'
import Plate from './components/Plate'
import PlatesPreviewList from './components/PlatesPreviewList'
import formsFromServer from './formsFromServer.json'

function DesignerView() {
  const dispatch = useDispatch()

  const data = formsFromServer

  const appRef = useRef()

  useEffect(() => {
    dispatch(updateRawPrintForms(data))

    const size = parseFloat(
      window
        .getComputedStyle(appRef.current, null)
        .getPropertyValue('font-size')
    )
  }, [])

  return (
    <div className="App" ref={appRef}>
      <Header />
      <section className="main-content"></section>
    </div>
  )
}

export default DesignerView
