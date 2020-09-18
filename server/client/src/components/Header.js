import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="left brand-logo">
            Email Feedback App
          </a>
          <ul class="right ">
            <li>
              <a href="#">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
