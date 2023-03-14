import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// pages
import Landing from "./pages/Landing";
import Browse from "./pages/Browse";
import Auth from "./pages/Auth";
import ResetPsw from "./pages/ResetPsw";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/signup" element={<Auth signup={true} />} />
            <Route path="/signin" element={<Auth signup={false} />} />
            <Route path="/reset-password" element={<ResetPsw />} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;