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

  const copyToClipboard = async () => {
    if (isEmpty) {
      return;
    }
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
    } catch (error) {
      console.error(error);
    }
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
