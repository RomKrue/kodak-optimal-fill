import { useDispatch } from 'react-redux'
import { updateRawPrintForms } from './store/slices/printFormsSlice'

import { useRef, useEffect, useState, useLayoutEffect } from 'react'

import './App.css'
import Header from './components/Header'
import Plate from './components/Plate'
import PlatesPreviewList from './components/PlatesPreviewList'
import UnusedPrintFormsPreview from './components/UnusedPrintFormsPreview'
import formsFromServer from './formsFromServer.json'

function App() {
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
      <UnusedPrintFormsPreview />
      {/*
      
        <Plate data={platesArr[0].forms} largeView={true} />
      <PlatesPreviewList data={platesArr} />
  */}
    </div>
  )
}

export default App
