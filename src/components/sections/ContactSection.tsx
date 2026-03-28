import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-16 pb-20"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.05] to-violet-400/10 p-8 backdrop-blur-xl md:p-10">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
          Contact
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
          Looking for a backend developer who can build reliable systems?
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
          I’m open to backend and full stack opportunities where I can contribute strong API development, business logic implementation, and system reliability.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:chindeloso@gmail.com"
            className="rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            Send Email
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            View Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}