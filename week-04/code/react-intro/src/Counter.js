import { useState } from 'react'

const Counter = () => {
  let [counter, setCounter] = useState(0)
  
  const handleIncrease = () => {
    console.log(counter)
    setCounter((counter += 1))
  }

  const handleDecrease = () => {
    setCounter((counter -= 1))
  }

  return (
    <div>
      <h1>Counter Component</h1>
      <button onClick={handleIncrease}>Increase</button>
      <p>{counter}</p>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default Counter
