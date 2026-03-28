type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}