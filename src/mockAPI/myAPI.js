/* eslint-disable no-unused-vars */
import allTimes from './allTimes';

export const fetchAPI = (date) => {

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

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(times);
        }, 5000);
    });
};

export const submitAPI = (formData) => {
  console.log(formData);
  
  
};
/* eslint-enable no-unused-vars */