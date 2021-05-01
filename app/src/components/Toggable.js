/* eslint-disable react/prop-types */
import React, { useState, forwardRef, useImperativeHandle } from 'react'
import Proptypes from 'prop-types'

const Toggable = forwardRef(({ children, showLabel = 'Open', hideLabel }, ref) => {
  const [visible, setVisible] = useState(false)

  const showWhenVisible = { display: visible ? '' : 'none' }
  const hideWhenVisible = { display: visible ? 'none' : '' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return { toggleVisibility }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{showLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button onClick={toggleVisibility}>{hideLabel}</button>
      </div>
    </div>
  )
})

Toggable.displayName = 'Toggable'

Toggable.propTypes = {
  showLabel: Proptypes.string, // If the prop has a default value is not needed to add the isRequired
  hideLabel: Proptypes.string.isRequired
}

export default Toggable
