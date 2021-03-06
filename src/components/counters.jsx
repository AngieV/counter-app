
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { counters, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <div>
                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />
                ))}
                <button onClick={this.props.onReset} className="btn-primary btn-sm m-2">RESET</button>

            </div>
        );
    }
}

export default Counters;