import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTodo = async () => {
    const res = await axios.post(BASE_URL + "/", { title, description });
    // addTodo(res.data);
    setTitle("");
    setDescription("");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        style={{ padding: 10, margin: 10, width: 100 }}
        type="text"
        placeholder="Enter the title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        style={{ padding: 10, margin: 10, width: 100 }}
        type="text"
        placeholder="Enter the description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={handleTodo}
        style={{ width: 100, margin: 20, padding: 10 }}
      >
        Button
      </button>
    </div>
  );
};

export default CreateTodo;
