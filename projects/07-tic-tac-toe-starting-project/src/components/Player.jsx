import { useState } from 'react';

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState("Name");
    const [isEditing, setIsEditing] = useState(false);

    // best-practice if updating state based on previous state value.
    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span>
                {isEditing ? <input type="text" required value={playerName} onChange={handleChange} />  :<span className="player-name" required> {playerName}</span>
                    
                }
              <span className="player-symbol"> {symbol}</span> 
            </span>
            <button onClick={handleEditClick}>{isEditing? "Save": "Edit" }</button>
          </li>
    );
}