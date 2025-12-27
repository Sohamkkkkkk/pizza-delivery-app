import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Customize from "./pages/Customize";


import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
