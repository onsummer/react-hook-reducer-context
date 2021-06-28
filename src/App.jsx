import React, { useState } from 'react'

import Buttons from './Buttons'
import ColorText from './ColorText'

import { Color } from './stores/Colors'

function App() {

  return (
    <div className="App">
      <Color>
        <ColorText></ColorText>
        <Buttons></Buttons>
      </Color>
    </div>
  )
}

export default App
