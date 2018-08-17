import React, {
  Component
} from 'react';
import './App.css';
import Square from './Square'
import NewGame from './NewGame'
import Header from './Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      xo: ["", "", "", "", "", "", "", "", ""],
      squareArray: ["", "", "", "", "", "", "", "", ""],
      win: false
    }
  }

  update = (xo) => {
    this.setState({
      xo: xo,
      counter: this.state.counter + 1
    })
  }

  alertWin = () => {
    this.setState({
      win: true
    })
    window.alert('win')
  }

  reset = () => {
    window.location.reload()
  }

  render() {
    let squares = this.state.squareArray.map((square, index) => {
      return ( <
        Square index = {
          index
        }
        key = {
          index
        }
        alertWin = {
          this.alertWin
        }
        win = {
          this.state.win
        }
        xo = {
          this.state.xo
        }
        update = {
          this.update
        }
        counter = {
          this.state.counter
        }
        />
      )
    })
    return (
      <main>
        <Header/>
        <div className="ttt">
          {squares}
        </div>
        <br/>
        <NewGame reset = {this.reset}/>
      </main>
    );
  }
}

export default App;
