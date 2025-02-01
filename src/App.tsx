import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import MessengerProfile from "@/pages/MessengerProfile";
import NotFound from "@/pages/NotFound";
import "./App.css";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/messenger/:id" element={<MessengerProfile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
      </Routes>
    </Router>
  );
}

export default App;