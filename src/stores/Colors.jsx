import React, { createContext, useReducer } from 'react'

export const colorContext = createContext({})
const ColorContextProvider = colorContext.Provider

export const UPDATE_COLOR = 'UPDATE_COLOR'
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}

export const Color = (props) => {
  const [color, dispatch] = useReducer(reducer, 'green')

  return <ColorContextProvider value={{ color, dispatch }}>
    {props.children}
  </ColorContextProvider>
}
