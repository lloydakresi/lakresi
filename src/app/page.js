import Link from "next/link";
import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

</head>

<main>
 <div className="h-screen flex flex-col mb-3">
  <header className="flex flex-col sm:flex-row sm:mx-3 leading:2 justify-between items-center">
    <h2 className="font-sans font-extrabold font-Ubuntu text-2xl my-3">Lloyd Akresi</h2>
    <nav>
      <ul className="flex flex-row justify-evenly gap-x-5 font-Ubuntu font-medium">
        <li><Link href="#">ABOUT ME</Link></li>
        <li><Link href="#">PROJECTS</Link></li>
        <li><Link href="#">CONTACT ME</Link></li>
      </ul>
    </nav>
  </header>
  <div className="flex-1 flex justify-center items-center text-center font-Ubuntu">
    <div className="text-center">
      <h2 className="font-bold text-5xl sm:text-8xl">Hello, I'm <span className="text-orange-800">Lloyd</span>,</h2>
      <h3 className="font-bold text-3xl sm:text-7xl mt-5">a fullstack developer.</h3>
    </div>
  </div>
  </div>

  <div className="min-h-screen flex flex-col justify-center items-center">
  <section className="w-full min-h-screen py-10">
    <h2 className="text-2xl sm:text-4xl font-Ubuntu font-bold text-center my-5">About Me</h2>
    <p className="text-justify font-Ubuntu mx-3 px-3 sm:mx-10 sm:px-10 sm:py-8 leading-7">
      I am Lloyd Akresi, a dedicated fullstack developer with a strong foundation in electrical and electronic engineering.
      Currently pursuing my degree at Kwame Nkrumah University of Science and Technology, I have honed my skills through hands-on experience and academic coursework.
      My expertise includes developing robust software solutions and optimizing systems using artificial intelligence.<br/>
      <br/>
      I am proficient in programming languages such as JavaScript, C, and Python, and have worked with frameworks like React, Bootstrap, and NextJS.
      My notable projects include a hostel management system, a REST API template, and an IoT energy monitoring system.
      With a passion for continuous learning and innovation, I aim to create impactful technology solutions.
    </p>
  </section>
</div>

<div className="min-h-screen flex flex-col justify-center items-center overflow-y-auto">
  <section className="w-full min-h-screen text-center py-10">
    <h2 className="text-2xl font-Ubuntu font-bold mt-5">Projects</h2>
    <Image src="12983631_5120888.svg" alt="Under Construction" width={320} height={320} className="mx-auto mt-5" />
    <p className="text-center font-Ubuntu mx-5 px-5 py-5 leading-8 text-xl">
      I'm cooking up some cool stuff! Check back soon for updates.
    </p>
  </section>
</div>
    </main>
    <footer className="flex flex-col justify-center items-center text-center py-5 font-Ubuntu text-sm">
      Made with ❤️ in Ghana <br/>
      &copy; 2024 Lloyd Akresi
    </footer>

    </>

  );
}
