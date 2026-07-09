import { personaTypes } from "../../data/personaTypes";
import { getSubtypeDefinition, getSubtypeSentence } from "../../data/subtypes";
import type { PersonaResult, PersonaType } from "../../types/persona";
import { TypeBadge } from "../TypeBadge/TypeBadge";

type PersonaCardProps = {
  result: PersonaResult;
  type?: PersonaType;
};

export function PersonaCard({ result, type }: PersonaCardProps) {
  const personaType =
    type ?? personaTypes.find((item) => item.code === result.typeCode);
  const accentColor = personaType?.color ?? "#8B5CF6";
  const subtype = getSubtypeDefinition(result.subtypeNumber);

  const traits = [
    { label: "表の顔", value: result.surfaceFace },
    { label: "裏の顔", value: result.hiddenFace },
    { label: "地雷", value: result.landmine },
    { label: "扱い方", value: result.handling },
  ];

  return (
    <article
      className="persona-card"
      style={{ "--persona-color": accentColor } as React.CSSProperties}
    >
      <div className="persona-card__header">
        <div>
          <p className="persona-card__kicker">Persona OS</p>
          <h2>{result.title}</h2>
        </div>
        {personaType ? (
          <TypeBadge code={personaType.code} color={personaType.color} />
        ) : null}
      </div>

      <div className="persona-card__code">{result.displayCode}</div>
      <p className="persona-card__subtype">{subtype.name}</p>
      <p className="persona-card__summary">
        {getSubtypeSentence(result.typeCode, result.subtypeNumber)}
      </p>

      <dl className="persona-card__grid">
        {traits.map((trait) => (
          <div className="persona-card__trait" key={trait.label}>
            <dt>{trait.label}</dt>
            <dd>{trait.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
