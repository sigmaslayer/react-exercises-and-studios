import { useState } from "react";

export default function BoardAssignment() {
  const boards = [
    {
      label: "Fun with Friends",
      value: "Fun with Friends",
    },
    {
      label: "Fine Dining",
      value: "Fine Dining",
    },
    {
      label: "Sweeties",
      value: "Sweeties",
    },
  ];
  const [boardName, setName] = useState("no boards yet!");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boards.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}
