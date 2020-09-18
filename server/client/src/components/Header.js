import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Loading'
      case false:
        return 'Im logged out'
      default:
        return 'Im logged in!'
    }
  }

  render() {
    console.log(this.props.auth)
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Email Feedback App
          </a>
          <ul className="right ">
            {/* <li>
              <a href="/">Login with Google</a>
            </li> */}
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header)
