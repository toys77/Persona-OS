import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { PersonaTypeAvatar } from "../components/PersonaTypeAvatar/PersonaTypeAvatar";
import { SectionCard } from "../components/SectionCard/SectionCard";
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
    <div className="page-stack home-page">
      <section className="hero">
        <div className="hero-avatar-row" aria-label="Persona OSタイププレビュー">
          {personaTypes.map((type) => (
            <PersonaTypeAvatar
              key={type.code}
              size="lg"
              type={type}
              variant="hero"
            />
          ))}
        </div>
        <p className="hero__eyebrow">PERSONA OS</p>
        <h1>Persona OS</h1>
        <p className="hero__catch">今日の自分を、1枚の人格カードに。</p>
        <div className="hero__actions">
          <Button className="hero__main-cta" fullWidth to="/diagnosis">
            診断を始める
          </Button>
        </div>
      </section>

      <article className="home-card-preview" aria-label="今日のPersonaカード">
        <div className="home-card-preview__header">
          <div>
            <p className="section-card__eyebrow">Today&apos;s Persona</p>
            <span>{latestResult ? "前回の診断結果" : "プレビュー"}</span>
          </div>
          {featuredType ? (
            <PersonaTypeAvatar size="lg" type={featuredType} variant="hero" />
          ) : null}
        </div>
        <div className="home-card-preview__body">
          <p className="home-card-preview__code">{featuredResult.displayCode}</p>
          <h2>{featuredResult.title}</h2>
          <p>{featuredType?.title ?? "あなたの人格OSを1枚のカードに。"}</p>
        </div>
      </article>

      <div className="home-action-grid" aria-label="ホーム導線">
        <Link
          className="home-action-card home-action-card--primary"
          to={latestResult ? "/result" : "/diagnosis"}
        >
          <span>前回結果</span>
          <strong>{latestResult ? "カードを見る" : "まず診断する"}</strong>
          <b aria-hidden="true">→</b>
        </Link>
        <Link
          className="home-action-card"
          to={latestResult ? "/compatibility" : "/diagnosis"}
        >
          <span>相性診断</span>
          <strong>{latestResult ? "2人で見る" : "結果が必要"}</strong>
          <b aria-hidden="true">→</b>
        </Link>
        <Link className="home-action-card" to="/types">
          <span>タイプ図鑑</span>
          <strong>8タイプを見る</strong>
          <b aria-hidden="true">→</b>
        </Link>
      </div>

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
