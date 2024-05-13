"use client";

import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at&nbsp;
        <a className="underline" href="mailto:namdevdk2710@gmail.com">
          namdevdk2710@gmail.com
        </a>
        &nbsp;or through this form.
      </p>

      <form className="mt-10 flex flex-col" action={sendEmail}>
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          maxLength={50}
          className="h-14 px-4 rounded-lg borderBlack"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
          className="borderBlack h-52 my-3 rounded-lg p-4"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
