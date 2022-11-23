import React, { Component } from 'react'

class Componente extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }
  
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    console.log('render')
    return (
      <div>
        <p>Mi nombre es Alex</p>
      </div>
    )
  }
}

export default Componente
