import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/be63910a-e387-43b3-aa68-e39d6aa34c79"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            fauzihelmi1234567@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-3"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-3 bg-[#ccd6f6]"
          type="email"
          placeholder="email@mail.com"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-3"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-emerald-500 hover:border-emerald-500 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
