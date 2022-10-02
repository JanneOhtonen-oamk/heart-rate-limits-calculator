import React, {useState} from 'react'
import './App.css'



function App() {

  const [age, setAge] = useState()
  const [hiValue, setHi] = useState(0)
  const [loValue, setLo] = useState(0)

  function calculate(e) {
    e.preventDefault()
    const hi = (220 - age) * 0.85
    const lo = (220 - age) * 0.65
    setHi(hi)
    setLo(lo)
  }

  return (
    <div className='background'>
      <h1>Heart rate limits calculator</h1>
      <form onSubmit={calculate}>
        <div>
          <label>Age</label>
        </div>
        <div>
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Heart rate limit</label>
        </div>
        <div>
          <output type="number">{loValue}-{hiValue}</output>
        </div>
        <button>Calculate</button>       
      </form>
    </div>
  );
}

export default App;
