import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { Component } from 'react'
import Link from 'next/link'

export class index extends Component {
  render() {
    return (
      <body>
          <div className ="styles.status"> {this.status}</div>
          <p>Kółko i krzyżyk</p>
          <button className="styles.square" onClick={this.props.onClick}>
            {this.props.value}
          </button>
          <Link className="styles.App-link" href="/tictac"> Idź do gry</Link>
       
        </body>
    )
  }
}

export default index