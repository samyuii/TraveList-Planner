import { useState } from "react";

export default function Item({ item, onDeleteItem, onToggleItem, onEditItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(item.description);
  const [quantity, setQuantity] = useState(item.quantity);

  function handleEdit(e) {
    e.preventDefault();
    onEditItem(item.id, { description, quantity });
    setIsEditing(false);
  }

  return (
    <li className="flex justify-between items-center py-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300">
      {isEditing ? (
        <form className="flex-1" onSubmit={handleEdit}>
          <input
            type="text"
            className="py-2 px-4 border border-gray-300 rounded-lg text-base mr-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            min="1"
            className="py-2 px-4 border border-gray-300 rounded-lg text-base mr-2"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button className="py-2 px-4 bg-blue-500 text-white rounded-lg text-base cursor-pointer transition duration-300 hover:bg-blue-600">
            Save
          </button>
          <button
            className="py-2 px-4 bg-gray-300 text-white rounded-lg text-base cursor-pointer transition duration-300 hover:bg-gray-400 ml-2"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span className={`flex-1 ${item.packed ? "line-through" : ""}`}>
            {item.quantity} {item.description}
          </span>
          <span className="flex-1 text-gray-500 text-sm">
            {item.dueDate
              ? `Due: ${new Date(item.dueDate).toLocaleDateString()}`
              : ""}
          </span>
          <button className="text-xl ml-4" onClick={() => setIsEditing(true)}>
            ✏️
          </button>
          <button
            className="text-xl ml-4"
            onClick={() => onToggleItem(item.id)}
          >
            {item.packed ? "Unpack" : "Pack"}
          </button>
          <button
            className="text-xl ml-4"
            onClick={() => onDeleteItem(item.id)}
          >
            ❌
          </button>
        </>
      )}
    </li>
  );
}
