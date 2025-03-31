import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ImageComponent from './ImageComponent'
import ButtonComponent from './ButtonComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div>
        <h1>Primo progetto con React</h1>
        <ImageComponent
          src="https://placedog.net/300/300"
          alt="immagine cane"
        />
        <p>
          <ButtonComponent text="Adotta" />
        </p>

      </div>



    </>
  )
}

export default App
