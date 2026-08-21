export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="text-center mb-5 fade-up">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="lead-muted mx-auto section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
