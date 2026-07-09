import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { PersonaTypeAvatar } from "../components/PersonaTypeAvatar/PersonaTypeAvatar";
import { CardExportArea } from "../components/ResultCards/CardExportArea";
import { ResultCardSwitcher } from "../components/ResultCards/ResultCardSwitcher";
import { SectionCard } from "../components/SectionCard/SectionCard";
import { personaTypes } from "../data/personaTypes";
import { getSubtypeDefinition, getSubtypeSentence } from "../data/subtypes";
import type { ResultCardType } from "../types/card";
import type { PersonaResult } from "../types/persona";
import { loadFromStorage, STORAGE_KEYS } from "../utils/storage";

type ResultLocationState = {
  result?: PersonaResult;
};

export function ResultPage() {
  const location = useLocation();
  const locationState = location.state as ResultLocationState | null;
  const [selectedCardType, setSelectedCardType] =
    useState<ResultCardType>("main");
  const result =
    locationState?.result ??
    loadFromStorage<PersonaResult>(STORAGE_KEYS.latestResult) ??
    null;
  const resultType = result
    ? personaTypes.find((type) => type.code === result.typeCode)
    : null;
  const subtype = result ? getSubtypeDefinition(result.subtypeNumber) : null;

  if (!result) {
    return (
      <div className="page-stack">
        <section className="page-heading">
          <p className="page-heading__eyebrow">No result</p>
          <h1>まだPersona OSが解析されていません。</h1>
          <p>
            まずは30問の診断から、あなたの人格カードを作成してください。
          </p>
        </section>
        <Button fullWidth to="/diagnosis">
          診断を始める
        </Button>
      </div>
    );
  }

  return (
    <div className="page-stack result-page">
      <section className="result-hero result-hero--card-first">
        {resultType ? (
          <div className="result-hero__avatar">
            <PersonaTypeAvatar size="lg" type={resultType} />
          </div>
        ) : null}
        <p className="result-hero__eyebrow">あなたのPersona OS</p>
        <div className="result-hero__code-group">
          <div className="result-hero__code">{result.displayCode}</div>
          {subtype ? (
            <div className="result-hero__subtype">{subtype.name}</div>
          ) : null}
        </div>
        <h1>{result.title}</h1>
        {subtype ? (
          <p className="result-hero__subtype-copy">
            {getSubtypeSentence(result.typeCode, result.subtypeNumber)}
          </p>
        ) : null}
        <p>
          診断結果をカードとして保存できます。友達に見せるなら、まずは人格カードがおすすめです。
        </p>
      </section>

      <ResultCardSwitcher
        onChange={setSelectedCardType}
        selected={selectedCardType}
      />

      <CardExportArea result={result} selectedCardType={selectedCardType} />

      {subtype ? (
        <SectionCard
          body={
            <div className="subtype-summary">
              <p className="subtype-summary__lead">
                {result.title} / {subtype.name}
              </p>
              <p>{getSubtypeSentence(result.typeCode, result.subtypeNumber)}</p>
              <div className="subtype-summary__grid">
                <div>
                  <span>強み</span>
                  <strong>{subtype.strength}</strong>
                </div>
                <div>
                  <span>注意点</span>
                  <strong>{subtype.caution}</strong>
                </div>
              </div>
            </div>
          }
          eyebrow="Subtype profile"
          title={`${result.displayCode} ${subtype.name}`}
        />
      ) : null}

      <div className="result-actions">
        <Button fullWidth to="/compatibility" variant="secondary">
          このタイプで相性を見る
        </Button>
        <Button fullWidth to="/diagnosis" variant="ghost">
          もう一度診断する
        </Button>
        <Button fullWidth to="/" variant="ghost">
          ホームへ戻る
        </Button>
      </div>

      <SectionCard
        body={
          <>
            Core: {result.layers.core}
            <br />
            Social: {result.layers.social}
            <br />
            Love: {result.layers.love}
            <br />
            Work: {result.layers.work}
            <br />
            Dark: {result.layers.dark}
          </>
        }
        eyebrow="Layer summary"
        title="5レイヤーまとめ"
      />
    </div>
  );
}
