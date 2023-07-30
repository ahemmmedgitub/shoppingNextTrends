// Write your JS code here
import './index.css'

const Header = () => {
  const avatar = 'help'

  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="site-logo"
      />
      <ul className="link-elements-container">
        <li className="list-element">Home</li>

        <li className="list-element">Products</li>

        <li className="list-element">Cart</li>

        <button type="button" className="list-element log-out">
          <li>Logout</li>
        </button>
      </ul>
    </div>
  )
}

export default Header
