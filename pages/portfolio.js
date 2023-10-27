import { Inter } from "next/font/google";
import Layout from "../components/layout";
import React from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

function Portfolio() {
  return (
    <Layout>
      <div>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto h-48 bg-white">
            <h1 className="text-5xl md:text-9xl font-bold py-20 -mb-24 text-center md:text-left ml-20">
              Portfolio
            </h1>
          </div>
          {/* Grid starts here */}
          <div className="">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
              {/* First card */}
              <a
                href="https://ottohellwig.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/project-blog.png"
                    alt="project-blog"
                    width={1000}
                    height={1000}
                    className="transform hover:scale-125 transition duration-2000 ease-out"
                  />
                  <h1 className="absolute top-10 left-10 text-white font-bold text-xl bg-zinc-400 rounded-md px-2">
                    Blog
                  </h1>
                  <h1 className="absolute bottom-10 left-10 text-white font-bold text-xl">
                    01
                  </h1>
                </div>
              </a>
              {/* Second card */}
              <a
                href="https://github.com/ottohellwig/cartesian-pathfinder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/project-cartesian-pathfinder.png"
                    alt="project-cartesian-pathfinder"
                    width={1000}
                    height={1000}
                    className="transform hover:scale-125 transition duration-2000 ease-out"
                  />
                  <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-zinc-400 rounded-md px-2">
                    Cartesian Pathfinder
                  </h1>
                  <h1 className="absolute bottom-10 left-10 text-white font-bold text-xl">
                    02
                  </h1>
                </div>
              </a>
              {/* Third card */}
              <a
                href="https://github.com/ottohellwig/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/project-wip.jpg"
                    alt="project-wip"
                    width={1000}
                    height={1000}
                    className="transform hover:scale-125 transition duration-2000 ease-out"
                  />
                  <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-zinc-400 rounded-md px-2">
                    More to come!
                  </h1>
                  <h1 className="absolute bottom-10 left-10 text-white font-bold text-xl">
                    03
                  </h1>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
export default Portfolio;
