import { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { PersonaTypeAvatar } from "../components/PersonaTypeAvatar/PersonaTypeAvatar";
import { SectionCard } from "../components/SectionCard/SectionCard";
import { TypeBadge } from "../components/TypeBadge/TypeBadge";
import { mockPersonaResult } from "../data/mockResult";
import { personaTypes } from "../data/personaTypes";
import type { PersonaResult } from "../types/persona";
import { loadFromStorage, STORAGE_KEYS } from "../utils/storage";

export function HomePage() {
  const [latestResult, setLatestResult] = useState<PersonaResult | null>(null);
  const featuredResult = latestResult ?? mockPersonaResult;
  const featuredType = personaTypes.find(
    (type) => type.code === featuredResult.typeCode,
  );

  useEffect(() => {
    setLatestResult(
      loadFromStorage<PersonaResult>(STORAGE_KEYS.latestResult) ?? null,
    );
  }, []);

  return (
    <div className="page-stack">
      <section className="hero">
        <div className="hero-avatar-row" aria-label="Persona OSタイププレビュー">
          {personaTypes.map((type) => (
            <PersonaTypeAvatar key={type.code} size="sm" type={type} />
          ))}
        </div>
        <p className="hero__eyebrow">PERSONA OS</p>
        <h1>Persona OS</h1>
        <p className="hero__catch">性格は、1つのタイプでは終わらない。</p>
        <p className="hero__text">
          表の顔、裏の顔、地雷、扱い方まで。
          <br />
          あなたの人格OSを解析する。
        </p>
        <div className="hero__actions">
          <Button fullWidth to="/diagnosis">
            診断を始める
          </Button>
          {latestResult ? (
            <Button fullWidth to="/result" variant="secondary">
              前回の結果を見る
            </Button>
          ) : null}
          {latestResult ? (
            <Button fullWidth to="/compatibility" variant="secondary">
              相性を見る
            </Button>
          ) : null}
          <Button fullWidth to="/types" variant="ghost">
            8タイプを見る
          </Button>
        </div>
      </section>

      <article className="home-card-preview">
        <div className="home-card-preview__header">
          <p className="section-card__eyebrow">Card preview</p>
          {featuredType ? (
            <TypeBadge code={featuredType.code} color={featuredType.color} />
          ) : null}
        </div>
        <div className="home-card-preview__body">
          <p className="home-card-preview__code">{featuredResult.displayCode}</p>
          <h2>{featuredResult.title}</h2>
          <p>{featuredType?.title ?? "あなたの人格OSを1枚のカードに。"}</p>
        </div>
      </article>

      <SectionCard
        body={
          <div className="feature-grid">
            <div className="feature-item">
              <strong>01</strong>
              <div>
                <h3>診断する</h3>
                <p>30問からPersona OSを解析</p>
              </div>
            </div>
            <div className="feature-item">
              <strong>02</strong>
              <div>
                <h3>カード化する</h3>
                <p>結果を画像として保存</p>
              </div>
            </div>
            <div className="feature-item">
              <strong>03</strong>
              <div>
                <h3>相性を見る</h3>
                <p>2人の関係性を言語化</p>
              </div>
            </div>
          </div>
        }
        eyebrow="Card ready"
        title="できること"
      />
    </div>
  );
}
