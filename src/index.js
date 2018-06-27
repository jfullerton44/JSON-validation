import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

class Hello extends React.Component {
    
  constructor(){
      // super() is needed in order to instatiate "this"
      super();
      this.state = {
          message: "my friend (from state)!"
      };
      this.updateMessage = this.updateMessage.bind(this);
  }

  // function to update the state of the displayed message
  updateMessage() {
      this.setState({
          message: "my friend (from changed state)!"
      });
  }

  // what we want to display
  render() {
       return (
          <div class="wrapper"> 
            <h1> Enter JSON Below</h1>
            <textarea name="json-input" id="json-input" 
             class="form-input" type="text" placeholder='{"enter": "json"}' rows="1" autofocus>
            </textarea>
          </div> 
      )
  }
}

// this is needed to actually display what we want displayed within render()
ReactDOM.render(
  <Hello message="my friend" />, 
  document.getElementById("root")
);



  // function isJSON(json) {
  //   try {
  //     var obj = JSON.parse(json)
  //     if (obj && typeof obj === 'object' && obj !== null) {
  //       return true
  //     }
  //   } catch (err) {}
  //   return false
  // }


