import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import ProtectedRoute from "./helpers/ProtectedRoute";
import Explore from "./pages/Explore";
import Library from "./pages/Library";
import PublicHome from "./pages/PublicHome";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" exact element={<PublicHome />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
