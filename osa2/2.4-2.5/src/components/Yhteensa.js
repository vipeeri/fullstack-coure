import React from 'react'

const Yhteensa = ({ yhteensa }) => {

const reducer = (accumulator, currentValue) => accumulator + currentValue;


  return (

    <div>
    <p>Yhteensä {yhteensa.reduce(reducer)} tehtävää</p>

    </div>

  )
}

export default Yhteensa
