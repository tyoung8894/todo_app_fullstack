import React, {Component}from 'react';
//import CounterButton from './counter/CounterButton'
import PropTypes from 'prop-types'
import './Counter.css'


class Counter extends Component {
    //define initial state of the counter
    constructor(){
        super();
        //state representing for total count
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render(){
        return (
          <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count" >{this.state.counter}</span>

            {/* <DecrementButton by={10} decrementMethod={this.decrement}/> */}
           
            {/* <div>
                <button onClick={this.reset}>Reset</button>
            </div> */}

            <div>
                <ResetButton resetMethod={this.reset}/>
            </div>
          </div>
        );
    }

    //merge of new state values with existing state
    increment(by) { //pass how much we are incrementing by 
        //console.log(`increment from parent - ${by}`);  //use tick to replace value of variables, allow embedded expressions, top left corner keyboard

        //pass prevState in arrow function, gets counter value from previous state
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by){
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

    reset(){
        this.setState({
            counter: 0
        });
    }

}


//passing child state to parent
class CounterButton extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        //storing state for each individual counter
        // this.state = {
        //     counter : 0
        // }

        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    render() {
        //const style = {fontSize: "50px", padding:"15px 30px"};

        ////arrow function provides reference to the method for onClick(), otherwise will result in a direct method call
        return  (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button> 
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button> 
                {/* <span className="count" >{this.state.counter}</span> */}
            </div>
          );
    }
    
    //merge of new state values with existing state
    //want to be able to increment Counter class counter from here  (parent method from child component)
    //pass in method as a property to the child component
    //pass a reference to the child in the parent's property   
    // increment() { 
    //     ////get rid of child state buttons, only need 
    //     this.setState(
    //         (prevState) => {
    //             return {counter: prevState.counter + this.props.by}  
    //         }
    //     );
    //     this.props.incrementMethod(this.props.by);  //from the props that are passed in, get the incremement method, pass param by
    // }

    // decrement() { 
    //     this.setState(
    //         (prevState) => {
    //             return {counter: prevState.counter - this.props.by}  
    //         }
    //     );
    //     this.props.decrementMethod(this.props.by);
    // }

}


//default value for the props
CounterButton.defaultProps = {
    by : 1 
}

 //type check on the property that is being passed (check for not a string)
 //import PropTypes
CounterButton.propTypes = {
    by : PropTypes.number
}

class ResetButton extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0
        }

        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <button className="reset" onClick={this.reset}>Reset</button> 
            </div>
        );
    }

    reset(){
        this.setState({
            counter : 0
        });
        this.props.resetMethod();
    }
}


// class DecrementButton extends Component {
//     constructor(){
//         super();
//         this.state = {
//             counter : 0
//         }
//         this.decrement = this.decrement.bind(this);
//     }

//     render() {
//         //const style = {fontSize: "50px", padding:"15px 30px"};
//         return  (
//             <div className="counter">
//                 <button onClick={this.decrement}> -{this.props.by}</button> 
//             </div>
//           );
//     }

//     decrement() { 
//         ////get rid of child state buttons, only need 
//         this.setState(
//             (prevState) => {
//                 return {counter: prevState.counter - this.props.by}  
//             }
//         );

//         this.props.decrementMethod(this.props.by);  //from the props that are passed in, get the incremement method, pass param by
//     }
// }





////will only show 1 counter, will use CounterButton as Counter
////export default CounterButton

export default Counter