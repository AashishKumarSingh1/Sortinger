import Link from "next/link";
import React from "react";
import { SiLinkedin } from "react-icons/si";

const sortingAlgorithms = [
  "Bubble Sort",
  "Selection Sort",
  "Insertion Sort",
  "Merge Sort",
  "Quick Sort",
  "Heap Sort",
  "Counting Sort",
  "Radix Sort",
  "Bucket Sort",
];

function Footer() {
  return (
    <div className="bg-gray-950 ring-3 ring-purple-900 text-white py-4 flex flex-col justify-between px-6">
      <div className="grid grid-cols-3 gap-4 text-center mb-4 md:mb-0">
        <h1 className="col-span-3 text-center text-2xl font-bold mb-4">
          Sortinger
        </h1>
        {sortingAlgorithms.map((algo, index) => (
          <span
            key={index}
            className="text-sm hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          >
            {algo}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-end mt-7 gap-11 text-xl">
        <Link
          className="mr-2 font-semibold border-b border-white "
          href="https://www.linkedin.com/in/aashish-kumar-singh-7110b02a9/"
          target="_blank"
        >
          Created with ❤️ by Aashish Kumar Singh
        </Link>
      </div>
    </div>
  );
}

export default Footer;
