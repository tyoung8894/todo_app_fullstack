// import React, {Component}from 'react';
// import PropTypes from 'prop-types'

// class CounterButton extends Component {

//     constructor(){
//         super();

//         //storing state for each individual counter
//         this.state = {
//             counter : 0
//         }

//         this.increment = this.increment.bind(this);
//     }

//     render() {
//         //const style = {fontSize: "50px", padding:"15px 30px"};
//         return  (
//             <div className="counter">
//                 <button onClick={this.increment}>+{this.props.by}</button> 
//                 <span className="count" >{this.state.counter}</span>
//             </div>
//           );
//     }
    
//     //merge of new state values with existing state
//     increment() {
//         this.setState({
//             counter: this.state.counter + this.props.by  
//         });
//     }
// }

// //default value for the props
// CounterButton.defaultProps = {
//     by : 1 
// }

//  //type check on the property that is being passed (check for not a string)
//  //import PropTypes
// CounterButton.propTypes = {
//     by : PropTypes.number
// }



// export default CounterButton