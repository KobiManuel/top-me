import { useState } from "react";
import "./App.scss";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
