import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = { <HomePage /> }></Route>
                    <Route path = "/booking" element = { <BookingPage /> }></Route>
                    <Route path = "/confirmed-booking" element = { <ConfirmedBooking /> }></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
