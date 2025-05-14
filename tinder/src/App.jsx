import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import People from "./pages/People";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import PersonDetail from "./pages/PersonDetail";
import "./assets/style.css";

function App() {

  function PrivateRoute({children}) {
    const token = localStorage.getItem("authToken");
    return token ? children : <Navigate to="/login" />;
  }
  function PublicRoute({children}) {
    const token = localStorage.getItem("authToken");
    return !token ? children : <Navigate to="/people" />;
  }


  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
              } />
            <Route path="/register" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />
            <Route path="/people" element={
              <PrivateRoute>
                <People />
              </PrivateRoute>
            } />
            <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
              } />
            <Route path="/profile/edit" element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            } />
            <Route path="/detail/:userId" element={
              <PrivateRoute>
                <PersonDetail />
              </PrivateRoute>
            } />
            <Route path="/" element={
              localStorage.getItem("authToken") ? (
                <Navigate to="/people" />
              ) : <Navigate to="/login" />
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App