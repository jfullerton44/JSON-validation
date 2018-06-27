  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';
  import registerServiceWorker from './registerServiceWorker';

  class Hello extends React.Component {
      
    constructor(){
        // super() is needed in order to instatiate "this"
        super();
        this.state = {
            message: "Please Enter JSON"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    //update the state of the displayed message
    updateMessage() {
      var input = document.getElementById("json-input").value;
      if (this.isJSON(input)) {
        this.setState({
          message: "JSON format is valid"
        });
      }
      else {
        this.setState({
          message: "Invalid JSON format, please try again."
        });
      }
    }

    // checking for valid JSON
    isJSON(jsonString) {
      try {
        var obj = JSON.parse(jsonString)
        if (obj && typeof obj === 'object' && obj !== null) {
          return true;
        }
      } catch (err) { }
      return false;
    }

    // render() is what we want to display
    render() {
        return (
            <div class="wrapper">
              <h4>{this.state.message}</h4>
              <textarea name="json-input" id="json-input" 
              class="form-input" type="text" placeholder='{"enter": "json"}' rows="1" autofocus>
              </textarea>
              <button onClick={this.updateMessage}>Validate!</button>
            </div> 
        )
    }
  }

  // this is needed to actually display what we want displayed within render()
  ReactDOM.render(
    <Hello />, 
    document.getElementById("root")
  );





