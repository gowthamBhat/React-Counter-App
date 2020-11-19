import React, { Component } from 'react'
import Counter from './counter';
class ParentCounter extends Component {


    render() {
        const { count } = this.props
        return (
            <div className="starter-template">

                {count.map((x) => {

                    return (

                        <Counter key={x.id}
                            count={x}
                            incrementHandle={this.props.incrementHandler}
                            decrementHandle={this.props.decrementHandler}
                            onDel={this.props.deleteHandler} />

                    )
                }
                )}
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.props.resetHandler} > Reset</button>

            </div>
        )
    }
}
// passing the deleteHandler method as a prop so can child component can call the root component
export default ParentCounter