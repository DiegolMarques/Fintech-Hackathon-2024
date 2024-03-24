import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Onboard from './pages/Onboard';
import SignIn from './pages/SignIn';
import SignInCont from './pages/SignInCont';
import Load from './pages/Load';
import Dashboard from './pages/Dashboard';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboard" element={<Onboard />} />
          <Route path="/signin" element={<SignInCont />} />
          <Route path="/load" element={<Load />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap"
      />
    </div>
  );
}

export default App;
