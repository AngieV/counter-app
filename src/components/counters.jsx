
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id:1, value:4 },
            { id:2, value:0 },
            { id:3, value:0 },
            { id:4, value:0 },
        ]
     };

     handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0; 
            return c;
        })
        this.setState({ counters });
     };
         

    //create a new array without a given counter, and let react update the state 
     deleteCounter = (counterId) =>{
         //get all the counters except the one with the given ID
        const counters = this.state.counters.filter(c => c.id !== counterId);
        //display new array using the above counters const
        this.setState({ counters:counters}) //key & value are the same so can be written as simply {counters}
     };

    render() { 
        return (
            <div>
                <button onClick={this.handleReset} className="btn-primary btn-sm m-2">RESET</button>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id} onDelete={this.deleteCounter} counter={counter} />
                ))}
            </div>
        );
    }
}
 
export default Counters;