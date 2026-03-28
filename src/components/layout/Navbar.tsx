import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function Navbar() {
  return (
    <motion.nav
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.5 }}
      className="mb-10 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl"
    >
      <div>
        <p className="text-lg font-semibold tracking-wide">Cheiselle Ann Deloso</p>
        <p className="text-sm text-white/60">Backend Developer • Web Developer</p>
      </div>

      <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        <a href="#about" className="transition hover:text-white">About</a>
        <a href="#skills" className="transition hover:text-white">Skills</a>
        <a href="#projects" className="transition hover:text-white">Projects</a>
        <a href="#experience" className="transition hover:text-white">Experience</a>
        <a href="#contact" className="transition hover:text-white">Contact</a>
      </div>
    </motion.nav>
  );
}