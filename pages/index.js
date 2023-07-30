import Link from "next/link";
import { Inter } from "next/font/google";
import Layout from "../components/layout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Otto Hellwig</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <main className="px-10">
          <section className="min-h-screen">
            <div className="flex justify-center items-center h-full flex-col">
              <h1 className="text-4xl font-display sm:text-6xl md:text-9xl font-bold mt-40 antialiased">
                Otto Hellwig
              </h1>
              <p className="text-lg mt-8 text-center">
                I&apos;m studying computer science at the{" "}
                <Link
                  target="_blank"
                  href="https://www.qut.edu.au"
                  className="underline duration-500 hover:text-zinc-300"
                >
                  Queensland University of Technology
                </Link>
                <br></br>
                and managing{" "}
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/sb-professional-painting/"
                  className="underline duration-500 hover:text-zinc-300"
                >
                  SB Professional Painting
                </Link>{" "}
                around the clock.
              </p>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
export default Home;
