import React from 'react'
import Kurssi from './components/Kurssi'

const App = ({ kurssit }) => {

  return (
    <div>
      <ul>
        {kurssit.map(kurssit => <Kurssi key={kurssit.id} kurssit={kurssit} />)}
      </ul>

    </div>
  )
}

export default App
