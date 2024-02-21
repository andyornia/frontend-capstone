 export const todaysDate = () => {
        
        var today = new Date();
        
        // Extract year, month, and day
        var year = today.getFullYear();
        var month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based index
        var day = String(today.getDate()).padStart(2, '0');
    
        // Format the date
        var formattedDate = year + '-' + month + '-' + day;
        
        return formattedDate;
    
  }