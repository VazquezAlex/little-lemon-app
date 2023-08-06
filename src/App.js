import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = { <HomePage /> }></Route>
                    <Route path = "/booking" element = { <BookingPage /> }></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
