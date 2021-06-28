import React, { useContext } from 'react'
import { colorContext } from './stores/Colors'

const ColorText = (props) => {
  const { color } = useContext(colorContext)
  return <div style={{ color: color }}>
    字体颜色概览
  </div>
}

export default ColorText