import React from "react";
import { useState } from "react";
const Circlebgchanger = () => {
  let [color, setColor] = useState("white");
  return (
    <>
      <h1 className="p-5 w-1/2 bg-gray-300 font-bold">Circle BgChanger</h1>
      <div className="w-1/2 flex justify-center gap-5 text-center bg-gray-400">
        <button
          style={{ backgroundColor: "black" }}
          onClick={() => setColor("black")}
          type="button"
          class="rounded-full bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Black
        </button>

        <button
          style={{ backgroundColor: "purple" }}
          onClick={() => setColor("purple")}
          type="button"
          class="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Purple
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
          type="button"
          class="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Orange
        </button>
      </div>

      <div className="border-2 w-1/2 border-black text-center flex justify-center p-5">
        <div
          className="border-4 shadow-lg border-red-500 text-center rounded-full p-3 w-[200px] h-[200px]"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </>
  );
};

export default Circlebgchanger;
