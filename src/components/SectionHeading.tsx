type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-ink/70">{description}</p>
    </div>
  );
}

export default SectionHeading;
