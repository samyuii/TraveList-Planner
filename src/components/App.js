import { useState, useEffect } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Progress from "./Progress";

export default function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("packingListItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem("packingListCategories");
    return savedCategories
      ? JSON.parse(savedCategories)
      : ["General", "Clothes", "Electronics", "Toiletries"];
  });

  useEffect(() => {
    localStorage.setItem("packingListItems", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("packingListCategories", JSON.stringify(categories));
  }, [categories]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleEditItem(id, newItem) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, ...newItem } : item))
    );
  }

  function handleClearList() {
    setItems([]);
  }

  function handleAddCategory(category) {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }
  }

  function handleRemoveCategory(category) {
    setCategories(categories.filter((cat) => cat !== category));
    setItems(
      items.map((item) =>
        item.category === category ? { ...item, category: "General" } : item
      )
    );
  }

  return (
    <div className="app p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <Logo />
      <Form
        onAddItems={handleAddItems}
        onAddCategory={handleAddCategory}
        onRemoveCategory={handleRemoveCategory}
        categories={categories}
      />
      <PackingList
        items={items}
        categories={categories}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onEditItem={handleEditItem}
        onClearList={handleClearList}
      />
      <Progress items={items} />
    </div>
  );
}
