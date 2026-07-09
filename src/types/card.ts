export type ResultCardType = "main" | "layers" | "handling";

export type ResultCardOption = {
  type: ResultCardType;
  label: string;
  description: string;
};

export const RESULT_CARD_OPTIONS: ResultCardOption[] = [
  {
    type: "main",
    label: "人格",
    description: "あなたのPersona OSを1枚で表示します。",
  },
  {
    type: "layers",
    label: "レイヤー",
    description: "本質・対人・恋愛・作業・ストレス時を表示します。",
  },
  {
    type: "handling",
    label: "取説",
    description: "友達に見せるための扱い方を表示します。",
  },
];
