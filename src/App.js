import './App.css'
import Header from './components/Header'
import Plate from './components/Plate'
import PlatesPreviewList from './components/PlatesPreviewList'
import UnusedPrintFormsPreview from './components/UnusedPrintFormsPreview'

import { nanoid } from 'nanoid'

function App() {
  return (
    <div className="App">
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
