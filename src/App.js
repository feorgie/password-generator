import Display from "./components/Display/Display";
import "./App.css";
import Generator from "./components/Generator";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("P4$5W0rD");
  const handlePasswordUpdate = (newPassword) => {
    setPassword(newPassword);
  };
  return (
    <div className="appContainer">
      <h1 className="fontMedium fontGrey">Password Generator</h1>
      <section className="sectionGenerator">
        <Display password={password} />
        <Generator className="generator" />
      </section>
    </div>
  );
}

export default App;
