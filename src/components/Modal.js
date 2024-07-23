import React from "react";

export default function Modal({
  show,
  onClose,
  onConfirm,
  categoryToRemove,
  isClearList = false,
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl mb-4">
          {isClearList ? "Confirm Clear List" : "Confirm Deletion"}
        </h3>
        <p className="mb-4">
          {isClearList
            ? "Are you sure you want to clear all items from the list?"
            : `Are you sure you want to remove the category "${categoryToRemove}"?`}
        </p>
        <div className="flex justify-end gap-4">
          <button
            className="py-2 px-4 bg-gray-300 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-lg"
            onClick={onConfirm}
          >
            {isClearList ? "Clear List" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
