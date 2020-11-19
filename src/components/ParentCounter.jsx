import React, { Component } from 'react'
import Counter from './counter';
class ParentCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 0 }
            ]
        }
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
    resetHandler = () => {
        const count = this.state.count.map((x) => {
            x.value = 0
            return x;
        })
        this.setState({ count })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.resetHandler} > Reset</button>
                {count.map((x) => {

                    return (

                        <Counter key={x.id} count={x} incrementHandle={this.incrementHandler} onDel={this.deleteHandler} />

                    )
                }
                )}

            </div>
        )
    }
}
// passing the deleteHandler method as a prop so can child component can call the root component
export default ParentCounter