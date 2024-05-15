"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

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
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at&nbsp;
        <a className="underline" href="mailto:namdevdk2710@gmail.com">
          namdevdk2710@gmail.com
        </a>
        &nbsp;or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData: FormData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            if (typeof error === "string") {
              toast.error(error || "Failed to send email");
            } else {
              toast.error(error.message || "Failed to send email");
            }
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          maxLength={50}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white/20 dark:focus:bg-white"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
          className="borderBlack h-52 my-3 rounded-lg p-4 dark:bg-white/20 dark:focus:bg-white"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
