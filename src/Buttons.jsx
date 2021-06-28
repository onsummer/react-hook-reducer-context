import React, { useContext } from 'react'
import { colorContext, UPDATE_COLOR } from './stores/Colors'

const Buttons = (props) => {
  const { dispatch } = useContext(colorContext)
  return <React.Fragment>
    <button onClick={() => {
      dispatch({
        type: UPDATE_COLOR,
        color: 'blue'
      })
    }}>切一个颜色</button>
    <button onClick={() => {
      dispatch({
        type: UPDATE_COLOR,
        color: 'black'
      })
    }}>切另一个颜色</button>
  </React.Fragment>
}

export default Buttons