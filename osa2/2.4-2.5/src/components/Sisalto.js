import React from 'react'
import Osa from './Osa'

const Sisalto = ({ sisalto }) => {
  return (

    <div>
    {sisalto.map(osa => <Osa key={osa.id} osa={osa}/>)}

    </div>

  )
}

export default Sisalto
