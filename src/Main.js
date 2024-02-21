// Main.js

import React, {useReducer, useEffect, useCallback } from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import { fetchAPI, submitAPI } from './mockAPI/myAPI';
import { todaysDate } from './mockAPI/todaysDate';

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
              return { ...state, availableTimes: { ...state.availableTimes, ...action.payload }, loading: false}
          case 'load':
              return { ...state, loading: true}
          default:
              return state;
      }
  };
  
  const [availableTimesState, availableTimesDispatch] = useReducer(timeReducer, initialState);
  
  // function initializeTimes(data) {
    // availableTimesDispatch({ type: 'initialize', payload: data });
  // }
  
  const initializeTimes = useCallback((data) => {
        availableTimesDispatch({ type: 'initialize', payload: data });
  }, []);
  
  // function updateTimes(time, newValue, date) {
      // availableTimesDispatch({ type: 'update', payload: { [time]: newValue } });
  // }
  
  const updateTimes = useCallback((data) => {
      availableTimesDispatch({ type: 'update', payload: data });
  }, []);
  
  const loadData = useCallback((data) => {
      availableTimesDispatch({ type: 'load' });
  }, []);
  
  const submitForm = useCallback((formData) => {
    return submitAPI(formData, availableTimesState.availableTimes); 
  }, [availableTimesState]);
  
  useEffect(() => {
        fetchAPI(todaysDate())
        .then(data => {
            initializeTimes(data);
        })
        .catch(error => console.error('Error fetching data:', error));
  }, [initializeTimes]);
  
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
            updateTimes: updateTimes,
            loadData: loadData,
            submitForm: submitForm
            })
          )}        
        </main>
        <Footer />
    </>
  );
}

export default Main;