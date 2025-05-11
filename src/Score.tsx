import { useState } from "react";

type PointsProps = {
  totalPoints: number;
};

export default function Points({ totalPoints }: PointsProps) {
  const [points, setPoints] = useState(totalPoints);
  const [strength, setStrength] = useState(0);
  const [speed, setSpeed] = useState(0);

  const handleAttributeChange = (  event: React.ChangeEvent<HTMLInputElement>,
    attributeName: "strength" | "speed"
    ) => {
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
      Final score: <span id="points">{points}</span> points
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
        First iteration {strength}
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
        Second iteration {speed}
      </div>
    </div>
  );
}
