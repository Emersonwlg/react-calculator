import React from 'react'
import Display from './Display'
import Keypad from './Keypad'
import useCalculator from '../hooks/useCalculator'

export default function Calculator() {
  const {
    display,
    handleClear,
    handleNumber,
    handleOperator,
    handleEquals
  } = useCalculator()

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad
        onClear={handleClear}
        onNumber={handleNumber}
        onOperator={handleOperator}
        onEquals={handleEquals}
      />
    </div>
  )
}
