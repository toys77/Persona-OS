import { RESULT_CARD_OPTIONS, type ResultCardType } from "../../types/card";

type ResultCardSwitcherProps = {
  selected: ResultCardType;
  onChange: (type: ResultCardType) => void;
};

export function ResultCardSwitcher({
  selected,
  onChange,
}: ResultCardSwitcherProps) {
  return (
    <div className="result-card-switcher" role="tablist" aria-label="カード種類">
      {RESULT_CARD_OPTIONS.map((option) => (
        <button
          aria-selected={selected === option.type}
          className={[
            "result-card-switcher__button",
            selected === option.type ? "result-card-switcher__button--active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          key={option.type}
          onClick={() => onChange(option.type)}
          role="tab"
          type="button"
        >
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}
