import Image from "next/image";

export default function Home() {
  return (
    <main className="dark:bg-darkBlue dark:text-white flex flex-col items-center justify-evenly p-4 sm:p-6 md:p-8 lg:p-12 space-y-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Welcome to Front-End Developer Pre-Screening Task
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <img
          className="rounded-full h-24 w-24"
          src="./melkam.jpg"
          alt="Melkam Beyene"
        />

        <div className="text-center sm:text-left space-y-2">
          <div className="space-y-1">
            <p className="text-lg font-semibold text-black dark:text-white">
              Melkam Beyene
            </p>
            <p className="text-slate-500 font-medium">Software Engineer</p>
          </div>
          <p className="px-4 py-2 rounded-full   border-purple-200 hover:text-white hover:bg-purple-500">
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
