import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);