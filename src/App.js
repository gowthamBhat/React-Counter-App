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

  render() {
    const { count } = this.state
    return (
      <div>
        {count.map((x) => {
          return (

            <Counter key={x.id} value={x.value} />
          )
        }
        )}

      </div>
    )
  }
}
export default App