import type { CSSProperties } from "react";
import { PersonaTypeAvatar } from "../PersonaTypeAvatar/PersonaTypeAvatar";
import { personaTypes } from "../../data/personaTypes";
import { getSubtypeDefinition, getSubtypeSentence } from "../../data/subtypes";
import type { PersonaResult } from "../../types/persona";

type MainPersonaCardProps = {
  result: PersonaResult;
};

export function MainPersonaCard({ result }: MainPersonaCardProps) {
  const personaType = personaTypes.find((type) => type.code === result.typeCode);
  const accentColor = personaType?.color ?? "#8B5CF6";
  const subtype = getSubtypeDefinition(result.subtypeNumber);

  const items = [
    { label: "表の顔", value: result.surfaceFace },
    { label: "裏の顔", value: result.hiddenFace },
    { label: "地雷", value: result.landmine },
    { label: "扱い方", value: result.handling },
    { label: "サブタイプの強み", value: subtype.strength },
    { label: "注意点", value: subtype.caution },
  ];

  return (
    <article
      className="result-card result-card--main"
      style={{ "--result-card-color": accentColor } as CSSProperties}
    >
      <div className="result-card__glow" />
      <header className="result-card__header">
        <p className="result-card__brand">Persona OS</p>
        <p className="result-card__kind">MAIN CARD</p>
      </header>

      <section className="result-card__identity">
        {personaType ? <PersonaTypeAvatar size="md" type={personaType} /> : null}
        <div className="result-card__identity-text">
          <p className="result-card__code">
            <span>{result.typeCode}</span>-{result.subtypeNumber}
          </p>
          <h2 className="result-card__title">{result.title}</h2>
          <p className="result-card__subtype">{subtype.name}</p>
        </div>
      </section>

      <p className="result-card__statement">
        <span className="result-card__subtype-title">
          {result.title} / {subtype.name}
        </span>
        <span className="result-card__subtype-note">
          {getSubtypeSentence(result.typeCode, result.subtypeNumber)}
        </span>
      </p>

      <dl className="result-card__compact-grid">
        {items.map((item) => (
          <div className="result-card__item" key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
