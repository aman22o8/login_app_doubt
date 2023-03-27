// Write your code here
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

const Home = () => (
  <div className="bg_container">
    <Message />
    <Login />
    <Logout />
  </div>
)

export default Home
