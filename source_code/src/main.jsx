import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import "./index.css";
import "./dashboard.css";
import "./highlighted-cars.css";
import ErrorPage from "./error-page";
import Dashboard from "./dashboard";
import HighlightedCar from "./highlighted-cars";
import Nav from "./nav";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Dashboard />} />
          <Route path="highlighted-cars" element={<HighlightedCar />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);