import type { CSSProperties } from "react";
import { PersonaTypeAvatar } from "../components/PersonaTypeAvatar/PersonaTypeAvatar";
import { TypeBadge } from "../components/TypeBadge/TypeBadge";
import { personaTypes } from "../data/personaTypes";

export function TypesPage() {
  return (
    <div className="page-stack types-page">
      <section className="page-heading">
        <p className="page-heading__eyebrow">Type index</p>
        <h1>8つの人格タイプ</h1>
        <p>
          Persona OSでは、性格を1つのラベルではなく、行動・感情・地雷・役割から見える化します。
        </p>
      </section>

      <div className="type-list">
        {personaTypes.map((type) => (
          <article
            className="type-card"
            key={type.code}
            style={{ "--type-color": type.color } as CSSProperties}
          >
            <div className="type-card__header">
              <div className="type-card__identity">
                <PersonaTypeAvatar
                  showBadge={false}
                  size="lg"
                  type={type}
                  variant="hero"
                />
                <div>
                  <TypeBadge code={type.code} color={type.color} />
                  <h2>{type.name}</h2>
                </div>
              </div>
              <p>{type.groupRole}</p>
            </div>
            <p className="type-card__title">{type.title}</p>
            <p className="type-card__description">{type.shortDescription}</p>
            <dl className="type-card__meta">
              <div>
                <dt>役割</dt>
                <dd>{type.groupRole}</dd>
              </div>
              <div>
                <dt>地雷</dt>
                <dd>{type.landmine}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
