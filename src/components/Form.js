import { useState } from "react";
import Modal from "./Modal";

export default function Form({
  onAddItems,
  onAddCategory,
  onRemoveCategory,
  categories,
}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("General");
  const [newCategory, setNewCategory] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [categoryToRemove, setCategoryToRemove] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
      category,
      dueDate,
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
    setCategory("General");
    setDueDate("");
  }

  function handleAddNewCategory(e) {
    e.preventDefault();
    if (newCategory) {
      onAddCategory(newCategory);
      setCategory(newCategory);
      setNewCategory("");
    }
  }

  function handleRemoveCategoryClick(categoryToRemove) {
    setCategoryToRemove(categoryToRemove);
    setShowModal(true);
  }

  function confirmRemoveCategory() {
    onRemoveCategory(categoryToRemove);
    setCategory("General");
    setShowModal(false);
  }

  const isDefaultCategory = (category) => {
    const defaultCategories = [
      "General",
      "Clothes",
      "Electronics",
      "Toiletries",
    ];
    return defaultCategories.includes(category);
  };

  return (
    <form
      className="add-form w-full max-w-3xl bg-gray-100 p-8 flex flex-wrap gap-4 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h3 className="w-full text-2xl text-gray-700 mb-4">
        🥶 Adventure is calling! Let's gear up 📝🎒
      </h3>
      <div className="flex w-full gap-4 mb-4 flex-wrap md:flex-nowrap">
        <input
          type="number"
          min="1"
          className="w-full md:w-1/4 py-2 px-4 border border-gray-300 rounded-lg text-base mb-4 md:mb-0"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <input
          type="text"
          className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-base mb-4 md:mb-0"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="w-full mb-4 flex flex-wrap md:flex-nowrap items-center gap-4">
        <select
          className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-base"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
          <option value="add-new">Add New Category</option>
        </select>
        {!isDefaultCategory(category) && category !== "add-new" && (
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-lg transition duration-300 hover:bg-red-600"
            type="button"
            onClick={() => handleRemoveCategoryClick(category)}
          >
            Remove Category
          </button>
        )}
      </div>
      {category === "add-new" && (
        <div className="w-full mb-4 flex flex-wrap items-center gap-4 mt-4">
          <input
            type="text"
            className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-base"
            placeholder="New Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-lg text-base cursor-pointer transition duration-300 hover:bg-blue-600"
            onClick={handleAddNewCategory}
          >
            Add Category
          </button>
        </div>
      )}
      <div className="w-full mb-4">
        <input
          type="date"
          className="w-full py-2 px-4 border border-gray-300 rounded-lg text-base"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg text-base cursor-pointer transition duration-300 hover:bg-green-600">
        Add
      </button>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmRemoveCategory}
        categoryToRemove={categoryToRemove}
      />
    </form>
  );
}
