// Code Keypad Component Here

import react from "react";

function Keypad() {
  function keyPadHandler(event) {
    event.preventDefault();
    console.log("Entering password...");
  }
  return (
    <div>
      <input
        type="password"
        name="passkey"
        onChange={keyPadHandler}
        placeholder="Entering password..."
      />
    </div>
  );
}

export default Keypad;
