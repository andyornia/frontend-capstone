// Main.js

import React, {useReducer} from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';


function Main({ children }) {
    
   const options = {};
   for (let i = 11; i <= 22; i++) {
      options[i] = true;
   }
    
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