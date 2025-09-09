import { useState } from "react"
import "../index.css"

type Props = {
  toggled: boolean;
  setToggled: (value: boolean) => void;
};

function ToggleSwitch({ toggled, setToggled }: Props) {
  return (
    <div
      className={`toggleSwitch${toggled ? " toggled" : ""}`}
      onClick={() => setToggled(!toggled)}
    >
      <div className="knob"></div>
    </div>
  );
}
export default ToggleSwitch;