import Image from "next/image";

export default function Home() {
  return (
    <main className="flex p-12 space-y-11 flex-col items-center justify-evenly">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Front-End Developer Pre-Screening Task
      </h1>
      <div className="flex gap-x-4">
        <img className="rounded-full mx-auto h-24" src="./melkam.jpg" />

        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-1">
            <p className="text-lg font-semibold text-black">Melkam Beyene</p>
            <p className="text-slate-500 font-medium">Software Engineer</p>
          </div>
          <button className="px-4 py-1 rounded-full border border-purple-200  hover:text-white hover:bg-purple-500">
            Message
          </button>
        </div>
      </div>
    </main>
  );
}
