import { Button } from "../components/Button/Button";
import { SectionCard } from "../components/SectionCard/SectionCard";

export function DiagnosisStartPage() {
  return (
    <div className="page-stack">
      <section className="page-heading diagnosis-intro">
        <p className="page-heading__eyebrow">Diagnosis</p>
        <h1>Persona OS 診断</h1>
        <p>
          30問の質問から、あなたの表の顔・裏の顔・地雷・扱い方を解析します。
        </p>
        <div className="info-badge-row">
          <div className="info-badge">
            <span>形式</span>
            <strong>5段階</strong>
          </div>
          <div className="info-badge">
            <span>所要時間</span>
            <strong>約3分</strong>
          </div>
          <div className="info-badge">
            <span>質問数</span>
            <strong>30問</strong>
          </div>
          <div className="info-badge">
            <span>正解</span>
            <strong>なし</strong>
          </div>
        </div>
      </section>

      <Button fullWidth to="/diagnosis/questions">
        診断を始める
      </Button>

      <SectionCard
        body="5問ずつ、全6ページで進みます。横スワイプは使わず、選択肢をタップして次へ進んでください。"
        eyebrow="About 3 minutes"
        note="診断結果はこの端末に保存され、結果カードとして表示できます。"
        title="所要時間：約3分"
      />

      <SectionCard
        body="正解はありません。「理想の自分」ではなく、普段の自分に近いものを選んでください。"
        eyebrow="Note"
        title="答えを整えすぎない"
      />
    </div>
  );
}
