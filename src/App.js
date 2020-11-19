import React, { Component } from 'react'
import ParentCounter from './components/ParentCounter';
class App extends Component {


  render() {

    return (
      <ParentCounter />
    )
  }
}
// passing the deleteHandler method as a prop so can child component can call the root component
export default App