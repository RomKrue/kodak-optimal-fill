import { useDispatch } from 'react-redux'
import { updateRawPrintForms } from './store/slices/printFormsSlice'

import { useRef, useEffect, useState, useLayoutEffect } from 'react'

import Login from './pages/Login'

import './App.css'

function App() {
  const appRef = useRef()

  useEffect(() => {
    const size = parseFloat(
      window
        .getComputedStyle(appRef.current, null)
        .getPropertyValue('font-size')
    )
  }, [])

  return (
    <div className="App" ref={appRef}>
      <Login />
    </div>
  )
}

export default App
