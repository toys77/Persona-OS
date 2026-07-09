import type { CSSProperties } from "react";
import { PersonaTypeAvatar } from "../PersonaTypeAvatar/PersonaTypeAvatar";
import { compatibilityRiskLabels } from "../../data/compatibilityMatrix";
import { personaTypes } from "../../data/personaTypes";
import type { CompatibilityResult } from "../../types/compatibility";

type CompatibilityCardProps = {
  result: CompatibilityResult;
};

export function CompatibilityCard({ result }: CompatibilityCardProps) {
  const selfType = personaTypes.find((type) => type.code === result.selfTypeCode);
  const partnerType = personaTypes.find(
    (type) => type.code === result.partnerTypeCode,
  );
  const selfColor = selfType?.color ?? "#8B5CF6";
  const partnerColor = partnerType?.color ?? "#60A5FA";

  return (
    <article
      className="compatibility-card"
      style={
        {
          "--compat-self-color": selfColor,
          "--compat-partner-color": partnerColor,
        } as CSSProperties
      }
    >
      <div className="compatibility-card__glow" />
      <header className="compatibility-card__header">
        <p>Persona OS</p>
        <span>COMPATIBILITY</span>
      </header>

      <section className="compatibility-card__pair">
        <div className="compatibility-card__avatar-pair" aria-hidden="true">
          {selfType ? <PersonaTypeAvatar size="md" type={selfType} /> : null}
          <b>×</b>
          {partnerType ? <PersonaTypeAvatar size="md" type={partnerType} /> : null}
        </div>
        <p>
          <span>{result.selfDisplayCode}</span>
          <b>×</b>
          <span>{result.partnerDisplayCode}</span>
        </p>
        <h2>{result.relationshipLabel}</h2>
      </section>

      <div className="compatibility-card__total">
        <span>総合相性</span>
        <strong>{result.totalScore}</strong>
      </div>

      <dl className="compatibility-card__scores">
        <div>
          <dt>会話</dt>
          <dd>{result.conversationScore}</dd>
        </div>
        <div>
          <dt>作業</dt>
          <dd>{result.workScore}</dd>
        </div>
        <div>
          <dt>恋愛</dt>
          <dd>{result.loveScore}</dd>
        </div>
      </dl>

      <dl className="compatibility-card__risks">
        <div className={`compatibility-card__risk--${result.conflictRisk}`}>
          <dt>衝突リスク</dt>
          <dd>{compatibilityRiskLabels[result.conflictRisk]}</dd>
        </div>
        <div className={`compatibility-card__level--${result.complementLevel}`}>
          <dt>補完度</dt>
          <dd>{compatibilityRiskLabels[result.complementLevel]}</dd>
        </div>
      </dl>

      <p className="compatibility-card__summary">{result.summary}</p>
    </article>
  );
}
