import React, { Component } from 'react'
import Counter from './components/counter';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: [
        { id: 1, value: 0 },
        { id: 2, value: 4 },
        { id: 3, value: 5 },
        { id: 4, value: 4 }
      ]
    }
  }
  deleteHandler = (val) => {


    const counter = this.state.count.filter(x => x.id !== val);
    this.setState({ count: counter })

  }

  render() {
    const { count } = this.state
    return (
      <div>
        {count.map((x) => {

          return (

            <Counter key={x.id} count={x} onDel={this.deleteHandler} />

          )
        }
        )}

      </div>
    )
  }
}
// passing the deleteHandler method as a prop so can child component can call the root component
export default App