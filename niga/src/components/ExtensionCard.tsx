import ToggleSwitch from "./ToggleSwitch";
import React, { useState } from "react";

export type ExtensionCardType = {
    icon ?: string;
    title ?: string;
    description ?: string
}

function ExtensionCard(props : ExtensionCardType) {
    const [toggled, setToggled] = useState(false);

    return (
    <div className="extensionCard">
            <div className="icon">{props.icon}</div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div>
                <button>Remove</button>
                <ToggleSwitch toggled={toggled} setToggled={setToggled} />
            </div>
    </div>)
}
export default ExtensionCard