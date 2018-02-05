import React from 'react'
import Sisalto from './Sisalto'
import Yhteensa from './Yhteensa'
import Osa from './Osa'

const Kurssi = ({ kurssit }) => {
let osa = kurssit.osat
let tehtava = osa.map(osa => osa.tehtavia)

  return (

      <div>
      <h1>{kurssit.nimi} </h1>
      <ul>
        {osa.map(osa => <Osa key={osa.id} osa={osa} />)}
      </ul>
      <Yhteensa yhteensa={tehtava} />
      </div>
  )
}

export default Kurssi
