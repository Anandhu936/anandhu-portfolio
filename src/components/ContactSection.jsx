import React, { useState } from "react";
import "boxicons";

const ContactSection = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0472fe5c-21ba-4dc1-b7d2-c5e0d4a3f4b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="Contact" className="w-full px-[10%]  scroll-mt-20">
      <p className=" text-center mb-2 text-sm lg:text-lg text-white">
        Contact with me
      </p>
      <h1 className="text-center text-3xl lg:text-5xl text-white font-bold">
        Get in Touch
      </h1>
      <p className="text-center text-sm lg:text-lg max-w-2xl mx-auto mt-5 mb-12 text-white">
        I'd love to hear from you! if you have any question , comments or
        feedback . please use the form below
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-neutral-50 border-[0.5px] border-gray-400 rounded-md bg-white "
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
            className="flex-1 p-3 outline-neutral-50 border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center cursor-pointer justify-between gap-2 bg-black/80 border-[0.5px] border-black text-white rounded-full mx-auto hover:text-green-500 duration-500"
        >
          Submit Now{" "}
          <box-icon name="right-arrow-alt" color="#FFFFFF"></box-icon>
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default ContactSection;
