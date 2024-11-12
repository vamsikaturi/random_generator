// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  onGenerateNumber = () => {
    const newGenerateRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: newGenerateRandomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="generate-container">
          <h1 className="main-heading">Random Number</h1>
          <div>
            <p className="paragraph">
              Generate a random number in the range of 0 to 100
            </p>
            <button
              type="button"
              className="button"
              onClick={this.onGenerateNumber}
            >
              Generate
            </button>
            <p className="generate-paragraph">{number}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
