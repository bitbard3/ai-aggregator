import React from "react";

export default function ModelButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-1.5 ml-auto mt-4 text-light hover:opacity-90 text-sm bg-neutral-900 border border-neutral-700 rounded-md "
    >
      {text}
    </button>
  );
}
