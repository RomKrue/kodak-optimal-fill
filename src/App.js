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
  console.log('App rendered')

  const dispatch = useDispatch()

  const data = formsFromServer
  dispatch(updateRawPrintForms(data))

  const inputRef = useRef()

  useEffect(() => {
    const size = parseFloat(
      window
        .getComputedStyle(inputRef.current, null)
        .getPropertyValue('font-size')
    )
    console.log(size)
  }, [])

  return (
    <div className="App" ref={inputRef}>
      <Header />
      <UnusedPrintFormsPreview />
      {/*
      
        <Plate data={platesArr[0].forms} largeView={true} />
      <PlatesPreviewList data={platesArr} />
  */}
    </div>
  )
}

export default App
