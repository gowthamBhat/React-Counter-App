import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    formatter = () => {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;     //count 0 adre Zero antha return madathe illa count value
    }
    badgeColorFormatter(count) {
        let classes = "badge m-2 badge-";
        classes += count === 0 ? "warning" : "primary";
        return classes;                          // zero count idre yellow color barathe illa blue
    }
    render() {
        const { count } = this.state;
        let classes = this.badgeColorFormatter(count);  // zero count idre yellow color barathe illa blue
        return (
            <>
                {/* using the css inline
                <h3 style={{ color: "blue" }}>using css inline</h3> */}

                <span className={classes}>{this.formatter()}</span>
                <button className="btn btn-secondary btn-sm">increment</button>
            </>
        );
    }


}
export default Counter;