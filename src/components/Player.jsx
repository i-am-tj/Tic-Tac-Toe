import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ name, setName ] = useState(initialName);

    function clickHandler() {
        setIsEditing((editing) => !editing);
        if(isEditing) {
            onChangeName(symbol, name);
        }
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {!isEditing ? 
                    <span className="player-name">{name}</span> 
                    :
                    <input type="text" className="player" required 
                    value={name} onChange={handleChange} />
                }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickHandler}>
                {!isEditing ? "Edit" : "Submit"}
            </button>
          </li>
    );
}