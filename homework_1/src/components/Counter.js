import {useState}  from 'react'



const Counter = () => {
    const [counter, setCounter] = useState(0)


  return (
    <>
        <h1>Counter : {counter}</h1>

        <button onClick={() => setCounter(prev => prev + 1)}>მიმატება</button>
        <button onClick={() => setCounter(prev => prev - 1)}>გამოკლება</button>
        <button onClick={() => setCounter(prev => prev * 4)}>გამრავლება</button>
        <button onClick={() => setCounter(0)}>განულება</button>
    </>
  )
}

export default Counter