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
    <p className="text-justify font-Raleway font-light mx-3 px-3 sm:mx-10 sm:px-10 sm:py-8 leading-7">
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
    <p className="text-center font-Ubuntu font-medium mx-5 px-5 py-5 leading-8 text-xl">
      I'm cooking up some cool stuff! Check back soon for updates.
    </p>
  </section>
    </div>


<section className="min-h-screen flex flex-col justify-center lg:border items-center sm:mx-40 py-10 lg:py">
<h2 className="text-2xl font-Ubuntu font-bold my-5 text-center">Contact Me</h2>
<div className=" flex flex-col sm:flex-row sm:gap-x-12 justify-center lg:border items-center sm:mx-40 py-10 lg:py">
<div className="w-11/12 sm:w-1/2 text-center sm:ml-5 sm:text-left p-5 dark:bg-slate-800 shadow-lg rounded-lg p-3">
  <div className="mb-5 h-full">
    <h3 className="text-2xl font-Ubuntu font-bold mb-4">Contact Information</h3>
    <p className="block mb-3 text-lg"><strong>Email:</strong> <span className="font-Raleway font-light">lloydakresi@gmail.com</span></p>
    <p className="mb-3 text-lg"><strong>Phone Number:</strong><span className="font-Raleway font-light">(233)50-449-9694</span></p>
    <p className="text-lg">
      <strong>Home Address:</strong>
      <span className="font-Raleway font-light"><br/>
      Pokuase Agric Bungalows,<br/>
      Pokuase - Accra,<br/>
      Ghana</span>
    </p>
  </div>
</div>

  <div className="w-full sm:w-1/2 p-5">
  <h3 className="text-2xl font-Ubuntu font-medium mb-4">Send me a message😊</h3>
    <form className="flex flex-col space-y-4">
      <label htmlFor="name" className="font-Ubuntu"><strong>Name</strong></label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required className="border-b border-gray-300 p-2 bg-transparent" />

      <label htmlFor="email" className="font-Ubuntu"><strong>Email</strong></label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required className="border-b border-gray-300 p-2 bg-transparent " />

      <label htmlFor="message" className="font-Ubuntu"><strong>Message</strong></label>
      <textarea id="message" name="message" placeholder="Enter your message" required className="border border-gray-300 p-2 h-32 rounded bg-transparent"></textarea>

      <button type="submit" className="bg-blue-500 font-Ubuntu dark:bg-orange-800 text-white py-2 rounded">Send</button>
    </form>
  </div>
</div>
</section>

    </main>
    <footer className="flex flex-col justify-center items-center text-center py-5 font-Ubuntu text-sm">
      Made with ❤️ in Ghana <br/>
      &copy; 2024 Lloyd Akresi
    </footer>

    </>

  );
}
