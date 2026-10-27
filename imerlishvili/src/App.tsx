import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from './store';
import BookingCard from './components/BookingCard';
import Bookings from './pages/Bookings';
import BookingDetails from './pages/BookingDetails';

function Home() {
  const list = useSelector((s: RootState) => s.bookings.slice(0, 3));
  return (
    <main className="wrap hero">
      <div className="copy">
        <h1>დასვენება იწყება ერთი ბარათით</h1>
        <p>შექმენი სასტუმროს პაკეტი, აირჩიე ღამეები და მიიღე ბარათი, რომელიც შენს მგზავრობას ხსნის.</p>
        <div className="cta">
          <Link to="/bookings" className="btn gold">პაკეტების ნახვა</Link>
          <Link to="/bookings" className="btn ghost">ახალი პაკეტის შექმნა</Link>
        </div>
      </div>
      <div className="fan">
        {list.map((b, i) => <BookingCard key={b.id} b={b} style={{ animationDelay: `${i * 140}ms` }} />)}
      </div>
    </main>
  );
}

export default function App() {
  const count = useSelector((s: RootState) => s.bookings.length);
  return (
    <>
      <nav className="nav wrap">
        <Link to="/" className="logo">Lodgia</Link>
        <div>
          <NavLink to="/" end>მთავარი</NavLink>
          <NavLink to="/bookings">პაკეტები <i>{count}</i></NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/:bookingId" element={<BookingDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="wrap foot">Lodgia · სასტუმროს დაჯავშნის პლატფორმა</footer>
    </>
  );
}
