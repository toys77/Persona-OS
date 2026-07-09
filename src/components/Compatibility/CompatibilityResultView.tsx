import { useRef } from "react";
import { SectionCard } from "../SectionCard/SectionCard";
import type { CompatibilityResult } from "../../types/compatibility";
import { CompatibilityCard } from "./CompatibilityCard";
import { CompatibilitySaveButton } from "./CompatibilitySaveButton";
import { CompatibilityScoreGrid } from "./CompatibilityScoreGrid";

type CompatibilityResultViewProps = {
  result: CompatibilityResult;
};

export function CompatibilityResultView({
  result,
}: CompatibilityResultViewProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <section className="compatibility-result" aria-label="相性診断結果">
      <div className="compatibility-result__heading">
        <p className="page-heading__eyebrow">Compatibility result</p>
        <h2>
          {result.selfDisplayCode} × {result.partnerDisplayCode}
        </h2>
        <p>{result.relationshipLabel}</p>
      </div>

      <CompatibilityScoreGrid result={result} />

      <div className="compatibility-card-frame" ref={cardRef}>
        <CompatibilityCard result={result} />
      </div>
      <CompatibilitySaveButton result={result} targetRef={cardRef} />

      <SectionCard
        body={result.summary}
        eyebrow="Relationship"
        title="2人の関係性"
      />
      <SectionCard
        body={result.conflictReason}
        eyebrow="Conflict"
        title="衝突原因"
      />
      <SectionCard body={result.advice} eyebrow="How to handle" title="攻略法" />
    </section>
  );
}
