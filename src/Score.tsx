import { useState } from "react";

export default function CharacterAttributes({ totalPoints }) {
  const [points, setPoints] = useState(totalPoints);
  const [strength, setStrength] = useState(0);
  const [speed, setSpeed] = useState(0);

  const handleAttributeChange = (event, attributeName) => {
    if (attributeName === "strength") {
      const newStrength = parseInt(event.target.value);
      let newSpeed = speed;
      setStrength(newStrength);
      if (newStrength + speed > totalPoints) {
        newSpeed = totalPoints - newStrength;
        setSpeed(newSpeed);
      }
        setPoints(totalPoints - newStrength - newSpeed);
    } else if (attributeName === "speed") {
        const newSpeed = parseInt(event.target.value);
        let newStrength = strength;
        setSpeed(newSpeed);
        if (newSpeed + strength > totalPoints) {
          newStrength = totalPoints - newSpeed;
          setStrength(newStrength);
        }
        setPoints(totalPoints - newStrength - newSpeed);
    }
  };

  return (
    <div>
      Character stats: <span id="points">{points}</span> points
      <div>
        <input
          type="range"
          id="strength"
          min="0"
          max={totalPoints}
          value={strength}
          step="1"
          onChange={(event) => handleAttributeChange(event, "strength")}
        />
        Strength {strength}
      </div>
      <div>
        <input
          type="range"
          id="speed"
          min="0"
          max={totalPoints}
          value={speed}
          step="1"
          onChange={(event) => handleAttributeChange(event, "speed")}
        />
        Speed {speed}
      </div>
    </div>
  );
}
