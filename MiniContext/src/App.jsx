import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Contexts/UserContextProvider";
import Profile from "./Components/Profile";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1 className="bg-pink-600 p-4 text-3xl">Context API</h1>
      <Login/>
      <Profile />
    </UserContextProvider>
  );
}

export default App;
