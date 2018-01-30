import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
      }
    }
  
    klikHyva = () => {
      this.setState({
        hyva: this.state.hyva + 1
      })
    }
  
    klikNeutraali = () => {
      this.setState({
        neutraali: this.state.neutraali + 1
      })
    }

    klikHuono = () => {
        this.setState({
          huono: this.state.huono + 1
        })
      }

    
  
    render() {

 

        const Statistics = (props) => {
            if (this.state.hyva + this.state.huono + this.state.neutraali === 0) {
                return (
                    <div>
                      <em>yhtään palautetta ei ole annettu</em>
                    </div>
                  )
                }
            return (
              <div>
                <p>Keskiarvo {(this.state.hyva + this.state.huono + this.state.neutraali) / 3} </p>
              </div>
            )
          }

          const Statistic = (props) => {    
            if (this.state.hyva + this.state.huono + this.state.neutraali === 0) {
                return (
                    <div>
                    </div>
                  )
                }  
            return (
              <div>
                <p>Positiivisia {this.state.hyva / (this.state.hyva + this.state.huono + this.state.neutraali) * 100}</p>

              </div>
            )
          }

      return (
        <div>
          <div>
              <h1> Anna palautetta </h1>
            
            <button onClick={this.klikHyva}>Hyvä</button>
            <button onClick={this.klikNeutraali}>Neutraali</button>
            <button onClick={this.klikHuono}>Huono</button><br/>
            <br/>
            
            <h1> Statistiikka </h1>

            <p>Hyvä {this.state.hyva}</p>
            <p>Neutraali {this.state.neutraali}</p>
            <p>Huono {this.state.huono}</p>
            <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} />
            <Statistic hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} />

          </div>
        </div>
      )
    }
  }


ReactDOM.render(
  <App />,
  document.getElementById('root')
)