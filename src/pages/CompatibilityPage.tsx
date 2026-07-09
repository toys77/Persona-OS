import { useState } from "react";
import { Button } from "../components/Button/Button";
import { CompatibilityInput } from "../components/Compatibility/CompatibilityInput";
import { CompatibilityResultView } from "../components/Compatibility/CompatibilityResultView";
import { PersonaTypeAvatar } from "../components/PersonaTypeAvatar/PersonaTypeAvatar";
import { SectionCard } from "../components/SectionCard/SectionCard";
import { TypeBadge } from "../components/TypeBadge/TypeBadge";
import { personaTypes } from "../data/personaTypes";
import type { CompatibilityResult } from "../types/compatibility";
import type { PersonaResult, PersonaTypeCode } from "../types/persona";
import { createCompatibilityResult } from "../utils/compatibility";
import { loadFromStorage, saveToStorage, STORAGE_KEYS } from "../utils/storage";

export function CompatibilityPage() {
  const selfResult =
    loadFromStorage<PersonaResult>(STORAGE_KEYS.latestResult) ?? null;
  const [selectedTypeCode, setSelectedTypeCode] =
    useState<PersonaTypeCode | null>(null);
  const [selectedSubtypeNumber, setSelectedSubtypeNumber] = useState<
    number | null
  >(null);
  const [compatibilityResult, setCompatibilityResult] =
    useState<CompatibilityResult | null>(() => {
      const latestCompatibility = loadFromStorage<CompatibilityResult>(
        STORAGE_KEYS.latestCompatibility,
      );

      if (latestCompatibility?.selfDisplayCode === selfResult?.displayCode) {
        return latestCompatibility;
      }

      return null;
    });

  if (!selfResult) {
    return (
      <div className="page-stack">
        <section className="page-heading">
          <p className="page-heading__eyebrow">Compatibility</p>
          <h1>まだPersona OSが解析されていません。</h1>
          <p>
            相性診断を使うには、まず30問の診断からあなたの人格カードを作成してください。
          </p>
        </section>
        <Button fullWidth to="/diagnosis">
          診断を始める
        </Button>
      </div>
    );
  }

  const selfType = personaTypes.find((type) => type.code === selfResult.typeCode);

  function handleSubmit() {
    if (!selfResult || !selectedTypeCode || !selectedSubtypeNumber) {
      return;
    }

    const result = createCompatibilityResult({
      selfTypeCode: selfResult.typeCode,
      selfSubtypeNumber: selfResult.subtypeNumber,
      partnerTypeCode: selectedTypeCode,
      partnerSubtypeNumber: selectedSubtypeNumber,
    });

    saveToStorage(STORAGE_KEYS.latestCompatibility, result);
    setCompatibilityResult(result);
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }

  return (
    <div className="page-stack compatibility-page">
      <section className="page-heading">
        <p className="page-heading__eyebrow">Compatibility</p>
        <h1>相性診断</h1>
        <p>
          あなたのPersona OSと、相手のタイプコードから2人の関係性を解析します。
        </p>
      </section>

      <SectionCard
        body={
          <div className="self-persona-row">
            {selfType ? <PersonaTypeAvatar size="sm" type={selfType} /> : null}
            {selfType ? (
              <TypeBadge code={selfType.code} color={selfType.color} />
            ) : null}
            <div>
              <strong>{selfResult.displayCode}</strong>
              <span>{selfResult.title}</span>
            </div>
          </div>
        }
        eyebrow="You"
        title="あなた"
      />

      {compatibilityResult ? (
        <CompatibilityResultView result={compatibilityResult} />
      ) : null}

      <CompatibilityInput
        onSubmit={handleSubmit}
        onSubtypeChange={setSelectedSubtypeNumber}
        onTypeChange={setSelectedTypeCode}
        selectedSubtypeNumber={selectedSubtypeNumber}
        selectedTypeCode={selectedTypeCode}
      />
    </div>
  );
}
