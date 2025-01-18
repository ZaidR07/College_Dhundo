/* eslint-disable tailwindcss/no-custom-classname */
import { Contact3 } from "../Constants/media";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        },
      );
  };
  return (
    <section className=" h-screen w-full justify-evenly lg:flex lg:min-h-screen">
      <div className="grid place-content-center">
        <img src={Contact3} alt="" className=" w-[300px] lg:w-[500px]" />
      </div>
      <div className="max-h-[85vh] md:w-2/5  rounded-lg px-8 pt-4">
        <p className="text-2xl font-semibold text-[#155E75]">Get in touch</p>
       

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-4 pb-4"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-[#155E75] ">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="placeholder:text-secondary rounded-lg border-none border-[#155E75] bg-[#bfd8ee] px-6 py-4 font-medium  outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-2 font-medium text-[#155E75] ">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="placeholder:text-secondary rounded-lg border-none border-[#155E75] bg-[#bfd8ee] px-6 py-4 font-medium  outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-2 font-medium text-[#155E75]">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="placeholder:text-secondary rounded-lg border-none border-[#155E75] bg-[#bfd8ee] px-6 py-4 font-medium  outline-none"
            />
          </label>

          <button
            type="submit"
            className="shadow-primary ml-auto w-fit rounded-xl bg-[#155E75] px-8 py-3 font-semibold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
