import React from 'react'

const buttons = [
  ['7','8','9','/'],
  ['4','5','6','*'],
  ['1','2','3','-'],
  ['0','.','=','+'],
]

export default function Keypad({ onClear, onNumber, onOperator, onEquals }) {
  return (
    <div className="keypad">
      <button className="btn clear" onClick={onClear}>C</button>
      {buttons.flat().map((btn, i) => {
        if (!isNaN(btn) || btn === '.') {
          return <button key={i} onClick={() => onNumber(btn)}>{btn}</button>
        } else if (btn === '=') {
          return <button key={i} className="btn equals" onClick={onEquals}>{btn}</button>
        } else {
          return <button key={i} className="btn operator" onClick={() => onOperator(btn)}>{btn}</button>
        }
      })}
    </div>
  )
}
