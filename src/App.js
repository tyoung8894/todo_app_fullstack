import React, {Component} from 'react';
import FirstComponent from'./learning/FirstComponent' 
import SecondComponent from'./learning/SecondComponent' 
import ThirdComponent from'./learning/ThirdComponent' 
import Counter from'./counter/Counter' 
import CounterButton from'./counter/CounterButton' 
import TodoApp from './Components/todo/TodoApp'

import './App.css';
import './bootstrap.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <LearningComponents></LearningComponents> */}
        {/* <CounterButton/>
        <CounterButton by={1}/>
        <CounterButton by={5}/>
        <CounterButton by={10}/> */}     
        {/* <Counter/> */}

        <TodoApp/>
      </div>
    );
  }
}


// class LearningComponents extends Component {
//   render(){
//     return (
//       <div className="LearningComponent">
//         <Counter by="1"/>
//         <Counter by="5"/>
//         <Counter by="10"/>
//       </div>
//     );
//   }
// }



export default App;




