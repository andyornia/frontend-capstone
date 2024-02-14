/* eslint-disable no-unused-vars */
import allTimes from './allTimes';

export const fetchAPI = (date) => {
    console.log(date);
    console.log(allTimes);

    let times = { ...allTimes };
    
    const nTimes = Object.keys(times).length;
    
    
    /* probability of a time not being available */
    let randomValue = Math.random();
    randomValue = 0.7;
    
    
    Object.entries(times).forEach(([key, value]) => {
       if (Math.random() < randomValue) {
           times[key] = false;
       } 
    });

    console.log(times)
    return times;
    
    
};

export const submitAPI = (formData) => {
  console.log(formData);  
};
/* eslint-enable no-unused-vars */