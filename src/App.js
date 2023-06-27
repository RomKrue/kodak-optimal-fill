import { useDispatch, useSelector } from 'react-redux'

import { plateScaleSelector } from './store/slices/plateScaleSlice'
import { resetPlateScale } from './store/slices/plateScaleSlice'

import { formsRawDataSelector } from './store/slices/printFormsDataSlice'

import './App.css'
import Header from './components/Header'
import Plate from './components/Plate'
import PlatesPreviewList from './components/PlatesPreviewList'
//import TestPlates from './TestPlates2.json'
import { useEffect, useState } from 'react'
//import formsFromServer from './formsFromServer.json'
import { nanoid } from 'nanoid'

function App() {
  const [rawForms, setRawForms] = useState([])

  const rawData = useSelector(formsRawDataSelector.getFormsRawData)

  // getFormsFromServer()

  //window.addEventListener('resize', setPlateScale()) //допилить макс и мин значение plateScale

  //resetPlateScale()
  /*
  const dispatch = useDispatch()
  const plateScale = useSelector(plateScaleSelector.getPlateScale)

  const platesArr = { ...TestPlates }
*/
  //  const [platesData, setPlatesData] = useState([])

  return (
    <div className="App">
      <Header />

      {/*
      <div className="plateWrapper">
        <Plate data={platesArr[0].forms} largeView={true} />
      </div>
      <PlatesPreviewList data={platesArr} />
  */}
    </div>
  )
}

export default App
