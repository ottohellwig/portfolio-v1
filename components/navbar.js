import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="py-10 mb-12 flex flex-col items-center text-lg">
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:text-zinc-300" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-zinc-300" href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="hover:text-zinc-300" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="border border-black text-black hover:bg-black hover:text-white py-2 px-4 rounded transition"
              href="/resume.pdf"
              locale="false"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
