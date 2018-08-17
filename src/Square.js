import React, {
  Component
} from 'react'
import './Square.css'

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      isFill: 'false',
      xWinCheck: false,
      oWinCheck: false
    }
  }

  play = () => {
    let {
      counter,
      xo,
      index,
      win
    } = this.props
    let {
      xWinCheck,
      oWinCheck,
      value
    } = this.state

    if (!win) {
      if (xo[index]=== "") {
        if (counter % 2 === 0) {
          xo[index] = ('X')
          value= 'X'
          // this.setState({
          //   value: 'X',
          //   isFill: 'true'
          // })
          this.props.update(xo)
        } else {
          xo[index] = ('O')
          value = 'O'
          this.props.update(xo)
        }
        this.setState({
          value: value
        })

        if (this.props.counter > 3) {
          var combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ]
          xWinCheck = combos.some(combo => {
            return combo.every(x => {
              return xo[x] === 'X'
            })
          })
          console.log(xWinCheck)
          ////////
          oWinCheck = combos.some(combo => {
            return combo.every(o => {
              return xo[o] === 'O'
            })
          })
          if (xWinCheck) {
            setTimeout(this.props.alertWin, 250)
          } else if (oWinCheck) {
            setTimeout(this.props.alertWin, 250)
          } else if (this.props.counter === 8) {
            setTimeout(function() {
              window.alert('tie')
            }, 250)
          }
        }
      }
    }
  }
  render() {
    return (
      <div className = "Wrapper">
        <div className = "Square" onClick = {this.play}>
          {this.state.value}
        </div>
      </div>
    )
  }
}

export default Square
