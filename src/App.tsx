import { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");

  if (!token) return <Login onLogin={setToken} />;

  return <Profile token={token} />;
}

export default App;
