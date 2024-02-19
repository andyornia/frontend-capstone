import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import BookingPage from './BookingPage';
import OrderPage from'./OrderPage';
import LoginPage from './LoginPage';
import ConfirmedBooking from './ConfirmedBooking';

import './App.css';
import './styles.css'; // Import your CSS file

/* 
  <Route path="/about" element={<AboutPage />} /> 
  <Route path="/menu" element={<MenuPage />} /> 
          <Route path="/order" element={<OrderPage />} /> 
          <Route path="/login" element={<LoginPage />} /> 

*/

function App({ children }) {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;


