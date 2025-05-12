import { useState } from "react";

type PointsProps = {
  totalPoints: number;
};

export default function Points({ totalPoints }: PointsProps) {
  const [points, setPoints] = useState(totalPoints);
  const [clarity, setClarity] = useState(0);
  const [creativity, setCreativity] = useState(0);

  const handleAttributeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    attributeName: "clarity" | "creativity"
  ) => {
    const value = parseInt(event.target.value);
    let newClarity = clarity;
    let newCreativity = creativity;

    if (attributeName === "clarity") {
      newClarity = value;
      if (newClarity + creativity > totalPoints) {
        newCreativity = totalPoints - newClarity;
        setCreativity(newCreativity);
      }
      setClarity(newClarity);
    } else {
      newCreativity = value;
      if (newCreativity + clarity > totalPoints) {
        newClarity = totalPoints - newCreativity;
        setClarity(newClarity);
      }
      setCreativity(newCreativity);
    }

    setPoints(totalPoints - newClarity - newCreativity);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Distribute Your Score
        </h2>
        <p className="text-gray-600 mb-6">
          Remaining Points: <span className="font-bold">{points}</span>
        </p>

        <div className="mb-4">
          <label htmlFor="clarity" className="block text-gray-700 mb-1">
            Clarity: {clarity}
          </label>
          <input
            type="range"
            id="clarity"
            min="0"
            max={totalPoints}
            value={clarity}
            step="1"
            className="w-full"
            onChange={(e) => handleAttributeChange(e, "clarity")}
          />
        </div>

        <div>
          <label htmlFor="creativity" className="block text-gray-700 mb-1">
            Creativity: {creativity}
          </label>
          <input
            type="range"
            id="creativity"
            min="0"
            max={totalPoints}
            value={creativity}
            step="1"
            className="w-full"
            onChange={(e) => handleAttributeChange(e, "creativity")}
          />
        </div>
      </div>
    </div>
  );
}
