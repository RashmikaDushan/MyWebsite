import { useState } from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Background />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
