import { useState } from 'react'

export default function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [expression, setExpression] = useState('')

  const handleClear = () => {
    setDisplay('0')
    setExpression('')
  }

  const handleNumber = (num) => {
    if (display === '0' && num !== '.') {
      setDisplay(num)
    } else {
      setDisplay(display + num)
    }
    setExpression(expression + num)
  }

  const handleOperator = (op) => {
    if (expression === '') return
    setExpression(expression + op)
    setDisplay('')
  }

  const handleEquals = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(expression).toString()
      setDisplay(result)
      setExpression(result)
    } catch {
      setDisplay('Erro')
      setExpression('')
    }
  }

  return { display, handleClear, handleNumber, handleOperator, handleEquals }
}
