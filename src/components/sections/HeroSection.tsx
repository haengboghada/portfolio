import { motion } from "framer-motion";
import { Mail, ArrowRight, Server, Database, Code2, Briefcase } from "lucide-react";
import { profileCards } from "../data/profileCard";
import { fadeUp, staggerContainer, floatAnimation, glowPulse } from "../utils/animations";

const iconMap = {
  server: Server,
  database: Database,
  code: Code2,
  briefcase: Briefcase,
};

export default function HeroSection() {
  return (
    <section className="grid min-h-[85vh] items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
      <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
        <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          Available for backend and full stack opportunities
        </div>

        <h1 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
          Backend systems,
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            {" "}modern platforms,{" "}
          </span>
          and reliable digital products.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
          Dynamic Software Developer with 8 years of experience specializing in backend architecture and scalable web systems. Expert in modernizing legacy environments, implementing real-time WebSocket services, and leading security initiatives through VAPT.
        </p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="inline-flex items-center rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>

          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-2xl font-semibold text-white">8+</p>
            <p className="mt-1 text-sm text-white/60">Years in development</p>
          </motion.div>

          <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-2xl font-semibold text-white">PHP / Node.js</p>
            <p className="mt-1 text-sm text-white/60">Backend-focused stack</p>
          </motion.div>

          <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-2xl font-semibold text-white">APIs + Systems</p>
            <p className="mt-1 text-sm text-white/60">Enterprise and product work</p>
          </motion.div>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-white/70">
          <a
            href="https://github.com/haengboghada"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/cheiselle-ann-deloso-b74906144/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition hover:bg-white/10"
          >
            LinkedIn
          </a>

          <a
            href="mailto:chindeloso@gmail.com"
            className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.12 }}
        className="relative"
      >
        <motion.div
          className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl"
          animate={glowPulse}
        />

        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-white/50">Profile Snapshot</p>
              <h2 className="text-2xl font-semibold">Developer Overview</h2>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
              8 Years Experience
            </div>
          </div>

          <motion.div className="mb-6" animate={floatAnimation}>
            <img
              src="/profile.jpg"
              alt="Cheiselle Ann Deloso"
              className="h-32 w-32 rounded-[2rem] border border-white/10 object-cover shadow-2xl shadow-cyan-500/10"
            />
          </motion.div>

          <div className="space-y-4">
            {profileCards.map((item, index) => {
              const Icon = iconMap[item.iconKey];

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="font-medium">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-white/65">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}