import { useSelector } from 'react-redux'

import { plateScaleSelector } from './store/slices/plateScaleSlice'

import './App.css'
import Header from './components/Header'
import Plate from './components/Plate'
import PlatesPreviewList from './components/PlatesPreviewList'
import TestPlates from './TestPlates.json'

function App() {
  //window.addEventListener('resize', setPlateScale()) //допилить макс и мин значение plateScale

  const plateScale = useSelector(plateScaleSelector.getPlateScale)

  return (
    <div className="App">
      <Header />
      <div className="plateWrapper">
        <Plate data={TestPlates} plateScale={plateScale} />
      </div>
      <PlatesPreviewList />
    </div>
  )
}

export default App
