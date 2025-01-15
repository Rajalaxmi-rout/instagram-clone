import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Leftside from './component/leftside'
import Middleside from './component/middleside'
import Rightside from './component/rightside'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <div className="leftsidehome">
          <Leftside/>
        </div>
        <div className="middleside"><Middleside/> </div>
        <div className="rightside"><Rightside/></div>
      </div>
       
    </>
  )
}

export default App
