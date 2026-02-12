import { useState, useRef } from "react";
// a ref is also a value just as a state in the end is variable but it is a special kind of value and managed by react in a special way to be precise.
export default function Player() {
  // One thing to use a ref for is you can connect them to JSX eements. And you can do it with a special ref prop.
  // refs save time with a lot of code when working with inputs
  // state values cause a component values to re-render when ever there is a state change unlike refs()
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState("unknown");

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button  onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
