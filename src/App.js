import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    constructor() {
        super();
        //this.state = this.props.something;
        console.log("App-Constructor")
    }

    componentDidMount() {
        //Ajax calls go here
        // this.setState({  })
        console.log("App-mounted")
    }

    handleIncrement = (counter) => {
        //use the spread operator to clone the counters
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    //create a new array without a given counter, and let react update the state 
    deleteCounter = (counterId) => {
        //get all the counters except the one with the given ID
        const counters = this.state.counters.filter(c => c.id !== counterId);
        //display new array using the above counters const
        //this.setState({ counters:counters}) key & value are the same so can be written as simply {counters}
        this.setState({ counters })
    };

    render() {
        return (
            // show the total number of counters, filtered by those with a value >0
            <React.Fragment >
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container" >
                    <Counters
                        counters={this.state.counters}
                        onDelete={this.deleteCounter}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;