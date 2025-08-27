import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router'
import BookingPage from './components/pages/booking/BookingPage.tsx'
import ConfirmedBooking from './components/pages/booking/ConfirmedBooking.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/booking" element={<BookingPage />}/>
            <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
        </Routes>
    </BrowserRouter>
)
