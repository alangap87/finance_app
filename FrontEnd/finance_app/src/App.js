import { Link } from "react-router-dom";
import './index.css';

export default function App() {
  return (
    <div>
      <h1>Finance App</h1>
      <nav>
        <Link to="/dashboard">dashboard</Link> |{" "}
        <Link to="/settings">settings</Link> |{" "}
      </nav>
    </div>
  );
}