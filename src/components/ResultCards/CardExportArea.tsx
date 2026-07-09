import { useRef } from "react";
import type { ResultCardType } from "../../types/card";
import type { PersonaResult } from "../../types/persona";
import { HandlingPersonaCard } from "./HandlingPersonaCard";
import { LayerPersonaCard } from "./LayerPersonaCard";
import { MainPersonaCard } from "./MainPersonaCard";
import { SaveCardButton } from "./SaveCardButton";

type CardExportAreaProps = {
  result: PersonaResult;
  selectedCardType: ResultCardType;
};

export function CardExportArea({
  result,
  selectedCardType,
}: CardExportAreaProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <section className="card-export-area" aria-label="保存用カード">
      <div className="card-export-area__frame" ref={cardRef}>
        {selectedCardType === "main" ? (
          <MainPersonaCard result={result} />
        ) : null}
        {selectedCardType === "layers" ? (
          <LayerPersonaCard result={result} />
        ) : null}
        {selectedCardType === "handling" ? (
          <HandlingPersonaCard result={result} />
        ) : null}
      </div>
      <SaveCardButton
        cardType={selectedCardType}
        result={result}
        targetRef={cardRef}
      />
    </section>
  );
}
