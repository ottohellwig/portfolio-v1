import { Inter } from "next/font/google";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import Layout from "../components/layout";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

function Contact() {
  return (
    <Layout>
      <div>
        <section>
          <div className="max-w-6xl mx-auto h-48 bg-white antialiased">
            <h1 className="text-5xl md:text-9xl font-bold py-20 -mb-24 text-center md:text-left ml-20">
              Contact
            </h1>
          </div>
          <div className="relative z-10 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:ml-4">
                <header className="">
                  <a
                    className="font-semibold text-2xl hover:text-zinc-300"
                    href="mailto:ottohellwig@hotmail.com"
                    target="_blank"
                  >
                    Get in touch, let&apos;s talk.
                  </a>{" "}
                  <p className="font-light text-base mt-2">
                    I&apos;m always happy to discuss new opportunities whether
                    it be work-related, coding projects or just a chat!
                  </p>
                </header>
                <div className="icons-container inline-flex flex-col my-4"></div>
                <div className="social-icons flex flex-row space-x-8">
                  <a
                    href="https://www.linkedin.com/in/ottohellwig/"
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
                    className="h-8 w-8 rounded-full hover:bg-zinc-300 flex items-center justify-center cursor-pointer "
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://ottohellwig.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 rounded-full hover:bg-zinc-300 flex items-center justify-center cursor-pointer "
                  >
                    <CgWebsite />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
export default Contact;
