import { Inter } from "next/font/google";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

function Portfolio() {
  return (
    <Layout>
      <div>
        <main className="px-10">
          <a>Testing</a>
        </main>
      </div>
    </Layout>
  );
}
export default Portfolio;
