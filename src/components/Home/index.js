// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <Link to="/" className="link-item">
        <div className="home-container">
          <Header />
          <div className="home-page">
            <div className="description-container">
              <h1 className="heading">Clothes That Get YOU Noticed</h1>
              <p className="home-description">
                Fashion is part of the daily air and it does not quite help that
                it changes all the time. Clothes have always been a marker of
                the era and we are in a revolution. Your fashion makes you been
                seen and heard that way you are. So, celebrate the seasons new
                and exciting fashion in your own way.
              </p>
              <button className="shop-btn" type="button">
                Shop Now
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="shopping-logo"
            />
          </div>
        </div>
      </Link>
    )
  }
}

export default Home
