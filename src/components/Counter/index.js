import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }))
  }

  onDecrement = () => {
    const {count} = this.state
    if (count >= 1) {
      this.setState(prev => ({
        count: prev.count - 1,
      }))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>{count}</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
