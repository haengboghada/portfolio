import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { fadeUp } from "../utils/animations";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <SectionHeading
        eyebrow="About"
        title="A developer who enjoys turning ideas into working systems."
      />
      <p className="mt-4 max-w-4xl text-base leading-8 text-white/70 md:text-lg">
        My focus is building secure, scalable, and efficient applications. I enjoy designing APIs, connecting databases, and delivering solutions that are practical, clean, and easy to maintain.
      </p>
    </motion.section>
  );
}