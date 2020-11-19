import React, { Component } from 'react'
import ParentCounter from './components/ParentCounter';
import NavBar from './components/NavBar'
class App extends Component {

  state = {
    count: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  deleteHandler = (val) => {


    const counter = this.state.count.filter(x => x.id !== val);
    this.setState({ count: counter })

  }


  incrementHandler = (x) => {
    const count = this.state.count.map((value) => {
      if (value.id === x.id)
        value.value++

      return value
    })
    this.setState({ count })
  }
  decrementHandler = (x) => {
    const count = this.state.count.map((value) => {
      if (value.id === x.id && x.value > 0)
        value.value--

      return value
    })
    this.setState({ count })
  }
  resetHandler = () => {
    const count = this.state.count.map((x) => {
      x.value = 0
      return x;
    })
    this.setState({ count })
  }

  // numberOfCounters = () => {
  //   let { count } = this.state;
  //   count = count.length;
  //   return count;
  // }



  render() {

    return (
      <React.Fragment>

        <NavBar totalCounters={this.state.count.filter((x) => x.value > 0).length} />
        <main className="container">

          <ParentCounter
            deleteHandler={this.deleteHandler}
            incrementHandler={this.incrementHandler}
            decrementHandler={this.decrementHandler}
            resetHandler={this.resetHandler}
            count={this.state.count}
          />


        </main>


      </React.Fragment>
    )
  }
}
// passing the deleteHandler method as a prop so can child component can call the root component
export default App