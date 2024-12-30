import Image from "next/image";

export default function Home() {
  return (
    <main className="dark:bg-darkBlue dark:text-white flex p-12 space-y-11 flex-col items-center justify-evenly">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Front-End Developer Pre-Screening Task
      </h1>
      <div className="flex gap-x-4">
        <img className="rounded-full mx-auto h-24" src="./melkam.jpg" />

        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-1">
            <p className="text-lg dark:text-white font-semibold text-black">
              Melkam Beyene
            </p>
            <p className="text-slate-500 font-medium">Software Engineer</p>
          </div>
          <p className="px-4 py-4 rounded-full border border-purple-200  hover:text-white hover:bg-purple-500">
            Hello there 👋, I am a software engineer with a passion for building
            web applications. I have experience in building web applications
            using React, Next.js, and Tailwind CSS. I am also familiar with
            Node.js, Express.js, and MongoDB. I am always eager to learn new
            technologies and improve my skills. I am looking forward to working
            with you.
          </p>
        </div>
      </div>
    </main>
  );
}
