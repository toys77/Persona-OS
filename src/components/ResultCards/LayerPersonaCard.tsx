import type { CSSProperties } from "react";
import { PersonaTypeAvatar } from "../PersonaTypeAvatar/PersonaTypeAvatar";
import { personaTypes } from "../../data/personaTypes";
import { getSubtypeDefinition } from "../../data/subtypes";
import type { PersonaResult } from "../../types/persona";

type LayerPersonaCardProps = {
  result: PersonaResult;
};

const layerLabels: Record<keyof PersonaResult["layers"], string> = {
  core: "Core / 本質",
  social: "Social / 対人",
  love: "Love / 親密関係",
  work: "Work / 作業",
  dark: "Dark / ストレス時",
};

export function LayerPersonaCard({ result }: LayerPersonaCardProps) {
  const personaType = personaTypes.find((type) => type.code === result.typeCode);
  const accentColor = personaType?.color ?? "#8B5CF6";
  const subtype = getSubtypeDefinition(result.subtypeNumber);

  return (
    <article
      className="result-card result-card--layers"
      style={{ "--result-card-color": accentColor } as CSSProperties}
    >
      <div className="result-card__glow" />
      <header className="result-card__header">
        <p className="result-card__brand">Persona OS</p>
        <p className="result-card__kind">LAYER MAP</p>
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
        {Object.entries(result.layers).map(([key, value]) => (
          <div
            className={[
              "result-card__item",
              key === "dark" ? "result-card__item--dark" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            key={key}
          >
            <dt>{layerLabels[key as keyof PersonaResult["layers"]]}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
