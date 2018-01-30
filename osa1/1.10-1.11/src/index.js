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

    asetaArvoon = (tila, arvo) => {
        return () => {
          if (tila === 'hyva') {
          this.setState({hyva: arvo })
          }
          if (tila === 'neutraali') {
            this.setState({neutraali: arvo })
            }
          if (tila === 'huono') {
              this.setState({huono: arvo })
              }
        }
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
                <table>
                  <thead>
                  <tr>
                <td>Hyvä {this.state.hyva}</td>
                </tr>
                <tr>
                <td>Neutraali {this.state.neutraali}</td>
                </tr>
                <tr>
                <td>Huono {this.state.huono}</td>
                </tr>
                <tr>
                <td>Positiivisia {this.state.hyva / (this.state.hyva + this.state.huono + this.state.neutraali) * 100}</td>
                </tr>
                </thead>
              </table>
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
                <table>
                  <thead>
                    <tr>
                <td>Keskiarvo {(this.state.hyva + this.state.huono + this.state.neutraali) / 3} </td>
                </tr>
                </thead>
                </table>

              </div>
            )
          }

      return (
        <div>
          <div>
              <h1> Anna palautetta </h1>
            
            <button onClick={this.asetaArvoon('hyva', this.state.hyva + 1)}>Hyvä</button>
            <button onClick={this.asetaArvoon('neutraali', this.state.neutraali + 1)}>Neutraali</button>
            <button onClick={this.asetaArvoon('huono', this.state.huono + 1)}>Huono</button><br/>
            <br/>
            
            <h1> Statistiikka </h1>


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