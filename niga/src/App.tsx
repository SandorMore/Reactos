import { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import ExtensionCard, { type ExtensionCardType } from "./components/ExtensionCard";

function App() {
  const [lightMode, setLightMode] = useState(true);

  let Hello : ExtensionCardType = {icon: "🤍", title: "Szia", description: "Sigma, sigma on the wall"}
  return (
    <div className={lightMode ? "wrapper light" : "wrapper dark"}>
      <h1>Hali</h1>
      <button onClick={() => setLightMode(prev => !prev)}>Klikk ide</button>
      <ExtensionCard {...Hello}/>
      <ExtensionCard icon="🖤" title="Szia" description="Beta beta on teh wall"/>
    </div>
  );
}

export default App