import "./index.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";

function App() {
  return (
    <div className="container">
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
