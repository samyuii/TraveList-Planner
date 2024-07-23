import React from "react";

export default function Progress({ items }) {
  if (!items.length)
    return (
      <div className="w-full max-w-3xl bg-gray-100 p-8 rounded-lg shadow-lg mt-8 text-center">
        <p className="text-lg text-gray-600">
          Start listing your travel items! 🗺️🚀
        </p>
      </div>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numUnpacked = numItems - numPacked;
  const packedPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="w-full max-w-3xl bg-gray-100 p-8 rounded-lg shadow-lg mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 mb-4">
        <h2 className="text-2xl font-semibold mb-4 md:mb-0">
          Packing Statistics 📊
        </h2>
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="w-full md:w-auto md:mr-4 mb-4 md:mb-0">
            <p className="text-xl">
              Total Items:{" "}
              <span className="font-semibold text-blue-600">{numItems}</span>
            </p>
          </div>
          <div className="w-full md:w-auto md:mr-4 mb-4 md:mb-0">
            <p className="text-xl">
              Packed:{" "}
              <span className="font-semibold text-green-600">{numPacked}</span>
            </p>
          </div>
          <div className="w-full md:w-auto md:mr-4 mb-4 md:mb-0">
            <p className="text-xl">
              Unpacked:{" "}
              <span className="font-semibold text-red-600">{numUnpacked}</span>
            </p>
          </div>
          <div className="w-full md:w-auto">
            <p className="text-xl">
              Packed Percentage:{" "}
              <span className="font-semibold text-indigo-600">
                {packedPercentage}%
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
        <div
          className="h-full bg-indigo-600"
          style={{ width: `${packedPercentage}%` }}
        ></div>
      </div>
      <div className="mt-4 text-center">
        <em className="text-lg">
          {packedPercentage === 100
            ? "All done! Bon voyage! 🛳️"
            : `Keep going! You're almost there! 💪`}
        </em>
      </div>
    </footer>
  );
}
