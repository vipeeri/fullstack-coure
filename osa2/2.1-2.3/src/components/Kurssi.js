import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'
import Yhteensa from './Yhteensa'

const Kurssi = ({ kurssi }) => {


  return (

      <div>
      <Otsikko otsikko={kurssi} />
      <Sisalto sisalto={kurssi} />
      <Yhteensa yhteensa={kurssi} />
      </div>
  )
}

export default Kurssi
