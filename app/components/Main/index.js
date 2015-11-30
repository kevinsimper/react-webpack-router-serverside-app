import React from 'react'
import { Link } from 'react-router'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div>Main</div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
