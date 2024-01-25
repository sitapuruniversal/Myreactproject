import react from "react";
import { useState } from "react";
function Bgchanger() {
  const [color, setColor] = useState("gray");
  return (
    <>
      <div>
        <div className="w-1/2 p-5 bg-gray-300 text-center font-bold">
          <h1 className="">Welcome to the rightangle Background Changer</h1>
        </div>
        <div class="place-items-center top-5 w-1/2  border-2 bg-slate-100 p-2 text-center rounded-md flex justify-center items-center gap-5 flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            onClick={() => setColor("black")}
            style={{ backgroundColor: "black" }}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Black
          </button>
          <button
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
            type="button"
            class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Yellow
          </button>
          <button
            type="button"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
            class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
            type="button"
            class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Green
          </button>
        </div>
        <div
          className="w-1/2 h-[400px] border-4 border-black rounded-md"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </>
  );
}
export default Bgchanger;
