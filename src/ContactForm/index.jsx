import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mleaanpw");
  const [email, setEmail] = useState("");

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-lg responsive-text">
      <label htmlFor="email" className="block font-medium mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full p-2 rounded-lg text-dark-gray"
        onChange={(e) => setEmail(e.target.value)}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-red-500 text-sm"
      />
      <label htmlFor="message" className="block font-medium   mt-4 mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full h-32 border p-2 rounded-lg text-dark-gray"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-red-500 text-sm"
      />
      <button
        type="submit"
        disabled={state.submitting || !email}
        tooltip="Please enter a valid email address"
        className={`p-2 rounded-lg hover:bg-gray-800 mt-4 ${
          state.submitting || !email
            ? "cursor-not-allowed opacity-50 text-gray-600"
            : "text-hot-pink"
        }`}
      >
        Submit
      </button>
    </form>
  );
};
export default ContactForm;
