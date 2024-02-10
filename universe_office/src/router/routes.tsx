import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/login_page.page";

export const routes = (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>
);
