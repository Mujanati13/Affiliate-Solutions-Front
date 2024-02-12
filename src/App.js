import React from "react";
import "../src/style/output.css";
// import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {/* <Login onFinish={onFinish} /> */}
      <Register />
    </div>
  );
}

export default App;
