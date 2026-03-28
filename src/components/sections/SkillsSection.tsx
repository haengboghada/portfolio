import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { skills } from "../data/skills";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <SectionHeading eyebrow="Skills" title="Tech stack I work with" />

      <motion.div
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ duration: 0.25, delay: index * 0.03 }}
            className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-medium text-white/85 backdrop-blur-xl"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}