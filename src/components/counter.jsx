import React, { Component } from 'react'

class Counter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         value: this.props.count.value
    //     }
    // }
    formatter = () => {
        const { value } = this.props.count;
        return value === 0 ? "Zero" : value;     //value 0 adre Zero antha return madathe illa value value
    }
    badgeColorFormatter(value) {
        let classes = "badge m-2 badge-";
        classes += value === 0 ? "warning" : "primary";
        return classes;                          // zero value idre yellow color barathe illa blue
    }

    render() {
        const { value } = this.props.count;
        let classes = this.badgeColorFormatter(value);  // zero value idre yellow color barathe illa blue
        return (
            <div className="increment-label">
                {/* using the css inline
                <h3 style={{ color: "blue" }}>using css inline</h3> */}

                <span className={classes}>{this.formatter()}</span>
                <button className="btn btn-secondary btn-sm" onClick={() => this.props.incrementHandle(this.props.count)}>increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDel(this.props.count.id)}>Delete</button>
            </div>
        );
    }
    //this.props.onDel will call the props method and pass the id of the count
    //onClick alli this.increment call mado badlu arrow function call madbodu, argumnet pass madod idre help agathe


}
export default Counter;
//props are immutable
