import ChatPage from "./pages/ChatPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import PrivatePage from "./pages/PrivatePage";
import FeaturePage from "./pages/FeaturePage";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ element }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return element;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* Use ProtectedRoute for routes that require authentication */}
          <Route path="chatpage" element={<ProtectedRoute element={<ChatPage />} />} />
          <Route path="private" element={<PrivatePage />} />
          <Route path="feature" element={<FeaturePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
