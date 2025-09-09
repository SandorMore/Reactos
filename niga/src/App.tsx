import { useEffect, useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import ExtensionCard, { type ExtensionCardType } from "./components/ExtensionCard";

function App() {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", toggled);
  }, [toggled]);
  let Hello : ExtensionCardType = {icon: "🤍", title: "Szia", description: "Sigma, sigma on the wall"}
  return (
    <>
      <h1>Hali</h1>
      <ExtensionCard {...Hello}/>
      <ExtensionCard icon="🖤" title="Szia" description="Beta beta on teh wall"/>
    </>
  );
}

export default App;
