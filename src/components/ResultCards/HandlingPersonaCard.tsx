import type { CSSProperties } from "react";
import { PersonaTypeAvatar } from "../PersonaTypeAvatar/PersonaTypeAvatar";
import { handlingTexts } from "../../data/handlingTexts";
import { personaTypes } from "../../data/personaTypes";
import { getSubtypeDefinition } from "../../data/subtypes";
import type { PersonaResult } from "../../types/persona";

type HandlingPersonaCardProps = {
  result: PersonaResult;
};

export function HandlingPersonaCard({ result }: HandlingPersonaCardProps) {
  const personaType = personaTypes.find((type) => type.code === result.typeCode);
  const accentColor = personaType?.color ?? "#8B5CF6";
  const handlingText = handlingTexts[result.typeCode];
  const subtype = getSubtypeDefinition(result.subtypeNumber);
  const items = [
    { label: "喜ぶ接し方", value: handlingText.likes },
    { label: "冷める接し方", value: handlingText.dislikes },
    { label: "黙った時の理由", value: handlingText.silentReason },
    { label: "仲直り方法", value: handlingText.reconciliation },
    { label: "相談する時のコツ", value: handlingText.consultationTip },
  ];

  return (
    <article
      className="result-card result-card--handling"
      style={{ "--result-card-color": accentColor } as CSSProperties}
    >
      <div className="result-card__glow" />
      <header className="result-card__header">
        <p className="result-card__brand">Persona OS</p>
        <p className="result-card__kind">USER MANUAL</p>
      </header>

      <section className="result-card__identity result-card__identity--compact">
        {personaType ? <PersonaTypeAvatar size="md" type={personaType} /> : null}
        <div className="result-card__identity-text">
          <p className="result-card__code">
            <span>{result.typeCode}</span>-{result.subtypeNumber}
          </p>
          <h2 className="result-card__title">{result.title}</h2>
          <p className="result-card__subtype">{subtype.name}</p>
        </div>
      </section>

      <dl className="result-card__layer-list">
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
