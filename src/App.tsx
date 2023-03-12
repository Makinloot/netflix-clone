import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { auth } from "./config/firebase"
import { AuthProvider } from "./context/AuthContext"

// pages
import Landing from "./pages/Landing"
import Browse from "./pages/Browse"
import Auth from "./pages/Auth"

function App() {

  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </AuthProvider>
        {/* <Browse /> */}
        {/* <Landing /> */}
        {/* <Auth /> */}
      </div>
    </Router>
  )
}

export default App
