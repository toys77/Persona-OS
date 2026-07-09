import type { ReactNode } from "react";

type SectionCardProps = {
  body: ReactNode;
  eyebrow?: string;
  note?: ReactNode;
  title: string;
};

export function SectionCard({ body, eyebrow, note, title }: SectionCardProps) {
  return (
    <section className="section-card">
      {eyebrow ? <p className="section-card__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      <div className="section-card__body">{body}</div>
      {note ? <p className="section-card__note">{note}</p> : null}
    </section>
  );
}
