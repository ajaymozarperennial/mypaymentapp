import './App.css';
import Login from './pages/Login';
import PaymentPage from './pages/PaymentPage';
import Registration from './pages/Register';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from './components/About';
import { useSelector } from "react-redux";
import Contact from './components/Contact';
import Profile from './components/Profile';
import Authguard from './components/Authgaurd/Authguard';
import LoginAuth from './components/Authgaurd/LoginAuth';
function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Authguard isAuthenticated={isLoggedIn} />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Route>
          <Route element={<LoginAuth isAuthenticated={!isLoggedIn} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
