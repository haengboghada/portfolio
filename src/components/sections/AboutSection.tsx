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
        I build secure, scalable, and maintainable web applications with a strong focus
        on backend architecture, API development, database design, and system integration.
        My work includes enterprise platforms, customs-related government systems,
        real-time betting backends, and self-made product projects.
      </p>
    </motion.section>
  );
}