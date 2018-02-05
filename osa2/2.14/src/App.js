import React from 'react';
import Numero from './components/Numero'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newNumber: '',
      newName: '',
      filter: ''
    }
  }

  componentDidMount() {
  console.log('will mount')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      this.setState({ persons: response.data })
    })
}

  addNumber = (event) => {
  event.preventDefault()

const names = this.state.persons.map(person => person.name)
const numbers = this.state.persons.map(person => person.number)
if(!names.includes(this.state.newName)){
  const numberObject = {
    name: this.state.newName,
    number: this.state.newNumber

  }

  const persons = this.state.persons.concat(numberObject)
  this.setState({
    persons,
    newNumber: '',
    newName: ''
  })
  axios.post('http://localhost:3001/persons', {
    name: this.state.newName,
    number: this.state.newNumber
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
}

handleNameChange = (event) => {
  console.log(event.target.value)

  this.setState({ newName: event.target.value })
}

handleNumberChange = (event) => {
  console.log(event.target.value)
  this.setState({ newNumber: event.target.value })
}

handleFilterChange = (event) => {
  console.log(event.target.value)
  this.setState({ filter: event.target.value })
}

render() {

console.log(this.state.filter)
  const numerot = this.state.persons.filter(person => person.name)


  return (
    <div>

    <h2>Puhelinluettelo</h2>
    <div>
    rajaa näytettäviä <input
        value={this.state.filter}
        onChange={this.handleFilterChange}/>
    </div>


    <form onSubmit={this.addNumber}>

    nimi:

    <input
    value={this.state.newName}
    onChange={this.handleNameChange}  />



    numero:
    <input
      value={this.state.newNumber}
      onChange={this.handleNumberChange}  />


    <div>
    <button type="submit">lisää</button>
    </div>
</form>

    <h2>Numerot</h2>
    <ul>
      {numerot.map(numero => <Numero key={numero.id} numero={numero} />)}
    </ul>
    </div>
  )
}
}

export default App
