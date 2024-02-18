// Main.js

import React, {useReducer, useEffect} from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import { fetchAPI, submitAPI } from './mockAPI/myAPI';

function Main({ children }) {
    
  const initialState = {
    availableTimes: {},
    loading: true
  }
  
  function timeReducer(state, action) {
      switch (action.type) {
          case 'initialize':
              return { availableTimes: action.payload, loading: false};
          case 'update':
              return { ...state, availableTimes: { ...state.availableTimes, ...action.payload }}
          default:
              return state;
      }
  };
  
  const [availableTimesState, availableTimesDispatch] = useReducer(timeReducer, initialState);
  
  function initializeTimes(data) {
    availableTimesDispatch({ type: 'initialize', payload: data });
  }
  
  function updateTimes(time, newValue, date) {
      availableTimesDispatch({ type: 'update', payload: { [time]: newValue } });
  }
  

  
  return (
    <>
        <Header />
        <Nav />
        <main>
          {/* Pass down state and setState function to all children */}
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { availableTimes: availableTimesState.availableTimes, 
            availableTimesDispatch: availableTimesDispatch, 
            loading: availableTimesState.loading,
            initializeTimes: initializeTimes,
            updateTimes: updateTimes
            })
          )}        
        </main>
        <Footer />
    </>
  );
}

export default Main;