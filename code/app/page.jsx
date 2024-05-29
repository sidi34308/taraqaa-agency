import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/hero";
export default function Home() {
  return (
    <main className="m-0">
      <Header />
      <Hero />
      <section className=" bg-black w-full p-20 h-screen ">
        <div className="bg-stone-950 w-full h-60 rounded-xl">

        </div>

      </section>


    </main>

  );
}
