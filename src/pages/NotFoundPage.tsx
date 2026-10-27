import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <div className="empty">
        <h1 className="big-404">404</h1>
        <p className="muted">გვერდი ვერ მოიძებნა</p>
        <Link to="/" className="btn">მთავარზე დაბრუნება</Link>
      </div>
    </PageTransition>
  );
}
