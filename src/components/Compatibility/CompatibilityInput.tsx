import { Button } from "../Button/Button";
import { PersonaTypeAvatar } from "../PersonaTypeAvatar/PersonaTypeAvatar";
import { TypeBadge } from "../TypeBadge/TypeBadge";
import { personaTypes } from "../../data/personaTypes";
import type { PersonaTypeCode } from "../../types/persona";

type CompatibilityInputProps = {
  selectedTypeCode: PersonaTypeCode | null;
  selectedSubtypeNumber: number | null;
  onTypeChange: (typeCode: PersonaTypeCode) => void;
  onSubtypeChange: (subtypeNumber: number) => void;
  onSubmit: () => void;
};

const subtypeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function CompatibilityInput({
  selectedTypeCode,
  selectedSubtypeNumber,
  onTypeChange,
  onSubtypeChange,
  onSubmit,
}: CompatibilityInputProps) {
  const canSubmit = selectedTypeCode !== null && selectedSubtypeNumber !== null;

  return (
    <section className="compatibility-panel" aria-label="相手のPersona OS選択">
      <div className="compatibility-panel__heading">
        <p className="page-heading__eyebrow">Partner</p>
        <h2>相手のPersona OSを選択</h2>
        <p>タイプコードとサブタイプ番号を選ぶと、2人の関係性を解析します。</p>
      </div>

      <div className="compatibility-picker">
        <p className="compatibility-picker__label">相手のタイプ</p>
        <div className="compatibility-type-grid">
          {personaTypes.map((type) => (
            <button
              aria-pressed={selectedTypeCode === type.code}
              className={[
                "compatibility-choice",
                selectedTypeCode === type.code ? "compatibility-choice--active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={type.code}
              onClick={() => onTypeChange(type.code)}
              type="button"
            >
              <PersonaTypeAvatar size="sm" type={type} />
              <TypeBadge code={type.code} color={type.color} />
              <span>{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="compatibility-picker">
        <p className="compatibility-picker__label">サブタイプ番号</p>
        <div className="compatibility-subtype-grid">
          {subtypeNumbers.map((number) => (
            <button
              aria-pressed={selectedSubtypeNumber === number}
              className={[
                "subtype-choice",
                selectedSubtypeNumber === number ? "subtype-choice--active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={number}
              onClick={() => onSubtypeChange(number)}
              type="button"
            >
              {number}
            </button>
          ))}
        </div>
      </div>

      {!canSubmit ? (
        <p className="compatibility-hint">相手のタイプと番号を選択してください。</p>
      ) : null}

      <Button disabled={!canSubmit} fullWidth onClick={onSubmit}>
        相性を見る
      </Button>
    </section>
  );
}
