import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// This app uses react-select for category box, react-columns for columning
// and has react-dates installed for future calendar use
import 'react-select/dist/react-select.css'; // style for category box
import Multiselect from './Multiselect.js'; // for category box
import Columns from 'react-columns'; // for having one row of four boxes
import DateRangePickerWrapper from 'react-dates' // not yet working

// Input bar should look like the following:
// Zipcode Box | Category Box | Start Date Box | End Date Box

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>commplex</h2>
        </div>
        <p className="App-intro">
          "Hey guys! How's it going?"
        </p>
        <Columns columns = "4">
          <div>
            <h3>Zip Code</h3>
            <input 
              id="zipcode" 
              type="text"
              maxlength="5"
               />
          </div>
          {'// TODO: Category box should display outside of its invis frame. also this should not pop up'}
          <Multiselect label="Categories" /> 
        </Columns>
      </div>
    );
  }
}


// class InputBox extends Component
export default App;
