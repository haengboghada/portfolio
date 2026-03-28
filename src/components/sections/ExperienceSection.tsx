import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "../data/experiences";
import { fadeUp } from "../utils/animations";

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-16"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <SectionHeading eyebrow="Experience" title="Professional journey" />

      <div className="mt-10 space-y-6">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold">{item.role}</h3>
                <p className="mt-2 text-cyan-200/80">{item.company}</p>
                <div className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                  {item.description}
                </div>
              </div>

              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/65">
                {item.period}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}