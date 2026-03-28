import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../data/projects";
import { fadeUp } from "../utils/animations";

export default function ProjectsSection() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <motion.section
      id="projects"
      className="py-16"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <SectionHeading
        eyebrow="Featured Work"
        title="Projects I’ve built and contributed to"
        description="A mix of self-made, enterprise, government, and real-time systems focused on backend architecture, integrations, and maintainable business logic."
      />

      {featuredProject && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 overflow-hidden rounded-[2.5rem] border border-cyan-300/30 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10 p-6 backdrop-blur-xl md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
              {featuredProject.image ? (
                <motion.img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="h-full min-h-[280px] w-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.35 }}
                />
              ) : (
                <div className="min-h-[280px] w-full bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_30%),rgba(255,255,255,0.03)]" />
              )}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-cyan-200/90">{featuredProject.category}</p>
                {featuredProject.status && (
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                    {featuredProject.status}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                {featuredProject.title}
              </h3>

              {featuredProject.highlight && (
                <p className="mt-3 text-sm font-medium text-white/85 md:text-base">
                  {featuredProject.highlight}
                </p>
              )}

              <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                {featuredProject.description}
              </p>

              {featuredProject.bullets && (
                <ul className="mt-5 space-y-2 text-sm text-white/65 md:text-base">
                  {featuredProject.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {featuredProject.link && (
                <a
                  href={featuredProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  View Live Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-300 hover:border-cyan-300/20 hover:bg-white/[0.06]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-cyan-200/80">{project.category}</p>
              {project.status && (
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/60">
                  {project.status}
                </span>
              )}
            </div>

            <h3 className="mt-4 text-2xl font-semibold leading-tight">
              {project.title}
            </h3>

            {project.highlight && (
              <p className="mt-3 text-sm font-medium text-white/85">
                {project.highlight}
              </p>
            )}

            <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
              {project.description}
            </p>

            {project.bullets && (
              <ul className="mt-4 space-y-2 text-sm text-white/65">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-sm text-cyan-200 transition hover:text-cyan-100"
              >
                Visit website
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}