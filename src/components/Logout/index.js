// Write your code here
import './index.css'
import {Component} from 'react'
// import Login from '../Login'

class Logout extends Component {
  state = {current: false}

  logoutClicked = () => {
    this.setState(prevState => ({current: !prevState.current}))
  }

  render() {
    const {current} = this.state
    return (
      <div>
        {current ? (
          <button onClick={this.logoutClicked} className="button" type="button">
            Logout
          </button>
        ) : null}
      </div>
    )
  }
}

export default Logout
