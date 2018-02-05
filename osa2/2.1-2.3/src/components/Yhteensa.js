import React from 'react'

const Yhteensa = ({ yhteensa }) => {

const reducer = (accumulator, currentValue) => accumulator + currentValue;
var result = yhteensa.osat.map(a => a.tehtavia)

  return (

    <div>
    <p>Yhteensä {result.reduce(reducer)} tehtävää</p>

    </div>

  )
}

export default Yhteensa
