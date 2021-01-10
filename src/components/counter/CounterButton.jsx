import React, { Component } from 'react';
import './Counter.css'

class CounterButton extends Component {
    // constructor() {
    //     super();
    //     // this.state = {
    //     //     counter: 0
    //     // }
    //     this.increment = this.increment.bind(this)
    //     this.decrement = this.decrement.bind(this)
    // }
    render() {
        return (
            <div className="CounterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }
    // increment() {
    //     {/* this.setState(
    //         {
    //             counter: this.state.counter + this.props.by
    //         }
    //     )*/}
    //     this.props.incrementMethod(this.props.by)
    // }
    // decrement() {
    //     this.props.decrementMethod(this.props.by)
    // }


}

CounterButton.defaultProps = {
    by: 1
}

export default CounterButton 