import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white my-6">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
        <form action="https://getform.io/f/1d9efb0b-ce1d-4964-aefe-8596c92645c5" method="POST" className="flex flex-col w-full md:w-1/2">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p5 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="text"
            name="Email"
            placeholder="Enter your email"
            className="my-4 p2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            placeholder="Enter your message"
            rows="10"
            className="bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>
          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's Talk
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
