import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: this.props.value
        }
    }
    formatter = () => {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;     //value 0 adre Zero antha return madathe illa value value
    }
    badgeColorFormatter(value) {
        let classes = "badge m-2 badge-";
        classes += value === 0 ? "warning" : "primary";
        return classes;                          // zero value idre yellow color barathe illa blue
    }
    incrementHandler = () => {
        this.setState({ value: this.state.value + 1 }) //increment the value value, also can pass a arrow function in setState
    }
    render() {
        const { value } = this.state;
        let classes = this.badgeColorFormatter(value);  // zero value idre yellow color barathe illa blue
        return (
            <div className="increment-label">
                {/* using the css inline
                <h3 style={{ color: "blue" }}>using css inline</h3> */}

                <span className={classes}>{this.formatter()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.incrementHandler}>increment</button>
            </div>
        );
    } //onClick alli this.increment call mado badlu arrow function call madbodu, argumnet pass madod idre help agathe


}
export default Counter;