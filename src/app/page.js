import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main>
     <div className="h-screen flex flex-col">
      <header className="flex flex-row justify-between items-center mx-10 my-2.5">
        <h2 className="font-sans font-extrabold font-Ubuntu text-2xl">Lloyd Akresi</h2>
        <nav>
          <ul className="flex flex-row justify-evenly gap-x-20 font-sans font-medium">
            <li><Link href="#">ABOUT ME</Link></li>
            <li><Link href="#">PROJECTS</Link></li>
            <li><Link href="#">CONTACT ME</Link></li>
          </ul>
        </nav>
      </header>
      <div className="flex-1 flex justify-center items-center text-center font-Ubuntu">
        <div className="text-center">
          <h2 className="font-bold text-8xl">Hello, I'm <span className="text-orange-800">Lloyd</span>,</h2>
          <h3 className="font-bold text-7xl mt-5">a fullstack developer.</h3>
        </div>
      </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center">
        <section className="w-full max-w-4xl">
          <h2 className="text-4xl font-Ubuntu font-bold text-center mb-5">About Me</h2>
            <p className="text-justify font-Ubuntu mx-10 px-10 py-10 leading-7">
              I am Lloyd Akresi, a dedicated fullstack developer with a strong foundation in electrical and electronic engineering.
              Currently pursuing my degree at Kwame Nkrumah University of Science and Technology, I have honed my skills through hands-on experience and academic coursework.
              My expertise includes developing robust software solutions and optimizing systems using artificial intelligence.<br/>
              I am proficient in programming languages such as JavaScript, C, and Python, and have worked with frameworks like React, Bootstrap, and NextJS.
              My notable projects include a hostel management system, a REST API template, and an IoT energy monitoring system.
              With a passion for continuous learning and innovation, I aim to create impactful technology solutions.
            </p>
        </section>
      </div>

      <div className="h-screen flex flex-col justify-center items-center overflow-y-auto">
        <section className="w-full max-w-4xl text-center">
          <h2 className="text-4xl font-Ubuntu font-bold mt-5">Projects</h2>
          <Image src="12983631_5120888.svg" alt="Under Construction" width={500} height={500} className="mx-auto mt-5" />
          <p className="text-center font-Ubuntu mx-5 px-5 py-5 leading-8 text-3xl">
            I'm cooking up some cool stuff! Check back soon for updates.
          </p>
        </section>
      </div>



    </main>
  );
}
