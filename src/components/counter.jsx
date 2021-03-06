import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //AJAX request-get new data from server
        }
    }

    componentWillUnmount() {
        console.log("Counter-Unmount");
    }

    render() {
        console.log("Counter-Rendered");
        return (
            <div>
                <h4>Counter #{this.props.counter.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    //onClick={this.handleIncrement}
                    className="btn btn-success btn-sm">+</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-dark btn-sm m-2">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn-danger btn-sm m-2">Delete Counter</button>
            </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
