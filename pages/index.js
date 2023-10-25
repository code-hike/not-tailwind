import Head from "next/head";
import { Header } from "../components/header";
import { ModernFeatures } from "../components/modern-features";
import { NotComponents } from "../components/not-components";
import { StateVariants } from "../components/state-variants";

export default function Home() {
  return (
    <main className="antialiased text-slate-400 bg-slate-900">
      <Head>
        <title>Cabyz LLC</title>
      </Head>

      <Header />
    </main>
  );
}
