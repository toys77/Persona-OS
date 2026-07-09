import { compatibilityRiskLabels } from "../../data/compatibilityMatrix";
import type { CompatibilityResult } from "../../types/compatibility";

type CompatibilityScoreGridProps = {
  result: CompatibilityResult;
};

export function CompatibilityScoreGrid({ result }: CompatibilityScoreGridProps) {
  const scoreItems = [
    { label: "会話", value: result.conversationScore },
    { label: "作業", value: result.workScore },
    { label: "恋愛", value: result.loveScore },
  ];

  return (
    <section className="compatibility-score-grid" aria-label="相性スコア">
      <div className="compatibility-score-grid__total">
        <span>総合相性</span>
        <strong>{result.totalScore}</strong>
      </div>
      {scoreItems.map((item) => (
        <div className="compatibility-score-card" key={item.label}>
          <span>{item.label}相性</span>
          <strong>{item.value}</strong>
        </div>
      ))}
      <div
        className={[
          "compatibility-score-card",
          "compatibility-score-card--text",
          `compatibility-score-card--risk-${result.conflictRisk}`,
        ].join(" ")}
      >
        <span>衝突リスク</span>
        <strong>{compatibilityRiskLabels[result.conflictRisk]}</strong>
      </div>
      <div
        className={[
          "compatibility-score-card",
          "compatibility-score-card--text",
          `compatibility-score-card--level-${result.complementLevel}`,
        ].join(" ")}
      >
        <span>補完度</span>
        <strong>{compatibilityRiskLabels[result.complementLevel]}</strong>
      </div>
    </section>
  );
}
