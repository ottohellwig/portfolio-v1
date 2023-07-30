import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl  mx-auto px-4 py-20 md:py-20">
        <div className="h-0.5 w-full bg-zinc-200"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; Otto Hellwig. All Rights Reserved.</p>
          </div>
          <div>
            <div>
              Built with {""}
              <div className="inline-block">
                <a
                  className="hover:text-zinc-300"
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </a>{" "}
                {""}
                <a>and</a> {""}
                <a
                  className=" hover:text-zinc-300"
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TailwindCSS
                </a>{" "}
                {""}
              </div>
            </div>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            <a
              href="https://linkedin.com/in/ottohellwig"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full hover:bg-zinc-300 flex items-center justify-center cursor-pointer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/ottohellwig"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full hover:bg-zinc-300 flex items-center justify-center cursor-pointer"
            >
              <BsGithub />
            </a>
            <a
              href="https://github.com/ottohellwig/portfolio-v1"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full hover:bg-zinc-300 flex items-center justify-center cursor-pointer"
            >
              <BsCodeSlash />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
