// Main.js

import React, {useReducer} from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import allTimes from './mockAPI/allTimes';
import { fetchAPI, submitAPI } from './mockAPI/myAPI';

function Main({ children }) {
    
  const options = fetchAPI('2024-01-01');

  function timeReducer(state, action) {
      switch (action.type) {
          case 'initialize':
              return options;
          case 'update':
              return {...state, ...action.payload }
          default:
              return state;
      }
  };
  
  const [availableTimes, availableTimesDispatch] = useReducer(timeReducer, options);
  
  function initializeTimes() {
      availableTimesDispatch({ type: 'initialize' });
  }
  
  function updateTimes(time, newValue, date) {
      availableTimesDispatch({ type: 'update', payload: { [time]: newValue } });
      console.log(time, newValue, date);
  }
  
  return (
    <>
        <Header />
        <Nav />
        <main>
          {/* Pass down state and setState function to all children */}
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { availableTimes, initializeTimes, updateTimes })
          )}        
        </main>
        <Footer />
    </>
  );
}

export default Main;