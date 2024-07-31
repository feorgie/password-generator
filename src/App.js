import Display from "./components/Display/Display";
import "./App.css";
import Generator from "./components/Generator/Generator";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const isEmpty = !password;

  const handlePasswordUpdate = (newPassword) => {
    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (isEmpty) {
      return;
    }
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
          isEmpty={isEmpty}
        />
        <Generator
          className="generator"
          setPassword={handlePasswordUpdate}
          isEmpty={isEmpty}
        />
      </section>
    </div>
  );
}

export default App;
