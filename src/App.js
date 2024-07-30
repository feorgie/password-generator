import Display from "./components/Display/Display";
import "./App.css";
import Generator from "./components/Generator/Generator";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("P4$5W0rD");
  const [copied, setCopied] = useState(false);

  const handlePasswordUpdate = (newPassword) => {
    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = () => {
    const targetText = document.querySelector("#inputForCopy");
    targetText.select();
    document.execCommand("copy");
    setCopied(true);
  };

  return (
    <div className="appContainer">
      <h1 className="fontMedium fontGrey">Password Generator</h1>
      <section className="sectionGenerator">
        <Display
          copied={copied}
          password={password}
          handleClick={copyToClipboard}
        />
        <Generator className="generator" setPassword={handlePasswordUpdate} />
      </section>
    </div>
  );
}

export default App;
