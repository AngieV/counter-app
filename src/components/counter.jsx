import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.counter.value
    };

    //use arrow function to bind the handler with the count object 
    handleIncrement = () => {
        console.log()
        //setState inherits from Component and tells react to update the view (calls render)
        //pass the object (count) into setState, get the value and increment
        this.setState({ value: this.state.value + 1 });
    };

    handleDecrement = () => {
        this.setState({ value: this.state.value - 1 });
    };

    
    render() { 
        return (
            <div>
                <h4>Counter #{this.props.counter.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-success btn-sm">+</button>
                <button onClick={this.handleDecrement} className="btn btn-dark btn-sm">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn-danger btn-sm m-2">Delete Counter</button>
            </div>
            )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value: count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;
