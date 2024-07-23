import { useState } from "react";
import Modal from "./Modal";
import Item from "./Item";

export default function PackingList({
  items,
  categories,
  onDeleteItem,
  onToggleItem,
  onEditItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByCategory, setFilterByCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filteredItems = items.filter((item) =>
    filterByCategory === "All" ? true : item.category === filterByCategory
  );

  const sortedItems = filteredItems
    .filter((item) =>
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "description") {
        return a.description.localeCompare(b.description);
      } else if (sortBy === "packed") {
        return Number(a.packed) - Number(b.packed);
      } else if (sortBy === "dueDate") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      } else {
        return a.id - b.id;
      }
    });

  function handleClearList() {
    onClearList();
    setShowModal(false);
  }

  return (
    <div className="list w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg mt-8">
      <input
        type="text"
        placeholder="Search items..."
        className="w-full py-2 px-4 border border-gray-300 rounded-lg text-base mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="w-full py-2 px-4 border border-gray-300 rounded-lg text-base mb-4"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="input">Sort by Input</option>
        <option value="description">Sort by Description</option>
        <option value="packed">Sort by Packed Status</option>
        <option value="dueDate">Sort by Due Date</option>
      </select>
      <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto">
        <button
          className={`py-2 px-4 rounded-lg text-base cursor-pointer transition duration-300 ${
            filterByCategory === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => setFilterByCategory("All")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`py-2 px-4 rounded-lg text-base cursor-pointer transition duration-300 ${
              filterByCategory === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setFilterByCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <ul className="list-none">
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              onEditItem={onEditItem}
            />
          ))
        ) : (
          <li className="text-center text-gray-500 py-4">
            No items in {filterByCategory} category
          </li>
        )}
      </ul>
      {items.length > 0 && (
        <button
          className="w-full py-2 px-4 bg-red-500 text-white rounded-lg text-base cursor-pointer transition duration-300 hover:bg-red-600 mt-4"
          onClick={() => setShowModal(true)}
        >
          Clear List
        </button>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleClearList}
        isClearList={true}
      />
    </div>
  );
}
