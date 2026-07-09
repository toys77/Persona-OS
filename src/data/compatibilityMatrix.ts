import type {
  CompatibilityResult,
  CompatibilityRisk,
} from "../types/compatibility";
import type { PersonaTypeCode } from "../types/persona";

export type CompatibilityPairData = Pick<
  CompatibilityResult,
  | "relationshipLabel"
  | "conversationScore"
  | "workScore"
  | "loveScore"
  | "conflictRisk"
  | "complementLevel"
  | "summary"
  | "conflictReason"
  | "advice"
>;

export type CompatibilityMatrix = Record<
  PersonaTypeCode,
  Partial<Record<PersonaTypeCode, CompatibilityPairData>>
>;

export const defaultCompatibilityPair: CompatibilityPairData = {
  relationshipLabel: "理解に時間がかかる関係",
  conversationScore: 65,
  workScore: 65,
  loveScore: 65,
  conflictRisk: "medium",
  complementLevel: "medium",
  summary:
    "大きく噛み合わないわけではありませんが、お互いの判断基準を理解するまでに少し時間がかかる関係です。",
  conflictReason:
    "相手が何を重視しているのかを確認しないまま進めると、すれ違いが起きやすくなります。",
  advice:
    "相手をタイプだけで決めつけず、何を大事にしているのかを言葉にして確認してください。",
};

export const compatibilityMatrix: CompatibilityMatrix = {
  VOID: {
    NOVA: {
      relationshipLabel: "補完関係だが、速度差で揉めやすい",
      conversationScore: 82,
      workScore: 61,
      loveScore: 74,
      conflictRisk: "high",
      complementLevel: "high",
      summary:
        "NOVAが場を動かし、VOIDが深く見る関係です。うまく噛み合うと、勢いと精度の両方を持てます。",
      conflictReason:
        "NOVAは早く動きたい一方で、VOIDは納得してから動きたいタイプです。NOVAの速度をVOIDが雑に感じ、VOIDの慎重さをNOVAが重く感じやすいです。",
      advice:
        "NOVAは理由を説明し、VOIDは完璧を待ちすぎないこと。最初に「今はアイデア出しなのか、決定なのか」を分けると揉めにくくなります。",
    },
    RAVEN: {
      relationshipLabel: "深く見すぎる分析同盟",
      conversationScore: 86,
      workScore: 88,
      loveScore: 70,
      conflictRisk: "medium",
      complementLevel: "high",
      summary:
        "どちらも違和感や構造に敏感で、浅い話より深い話で噛み合いやすい関係です。",
      conflictReason:
        "お互いに正しさや納得感を重視するため、議論が長くなりやすいです。感情のケアを省略すると、静かに距離ができます。",
      advice:
        "結論だけでなく、どこまで話せば十分かを決めておくと楽になります。分析しすぎて動けなくなる前に、一度仮決定を置いてください。",
    },
  },
  LUNE: {
    ECHO: {
      relationshipLabel: "空気を読み合いすぎる優しい関係",
      conversationScore: 84,
      workScore: 72,
      loveScore: 86,
      conflictRisk: "medium",
      complementLevel: "medium",
      summary:
        "お互いに相手の感情や場の空気を読むため、安心感のある関係になりやすいです。",
      conflictReason:
        "どちらも本音を飲み込みやすいため、表面上は穏やかでも不満が溜まることがあります。",
      advice:
        "「どっちでもいい」が続いた時ほど、本音を確認してください。小さな違和感を早めに言葉にすると長続きします。",
    },
  },
  NOVA: {
    RAVEN: {
      relationshipLabel: "勢いとツッコミがぶつかる関係",
      conversationScore: 76,
      workScore: 66,
      loveScore: 62,
      conflictRisk: "high",
      complementLevel: "high",
      summary:
        "NOVAが動かし、RAVENが整える関係です。役割が分かれると強いですが、同じ場面で主導権を取り合うとぶつかります。",
      conflictReason:
        "NOVAはRAVENを細かすぎると感じ、RAVENはNOVAを雑すぎると感じやすいです。",
      advice:
        "最初はNOVAが広げ、後からRAVENが整える流れにすると噛み合います。RAVENは否定から入らず、NOVAは確認を面倒がらないことが大切です。",
    },
  },
  RAVEN: {},
  MUSE: {
    LUNE: {
      relationshipLabel: "感性と感情が響きやすい関係",
      conversationScore: 86,
      workScore: 70,
      loveScore: 88,
      conflictRisk: "medium",
      complementLevel: "medium",
      summary:
        "MUSEの表現や世界観を、LUNEが感情面で受け取りやすい関係です。深い話や好きなものの共有で距離が縮まりやすいです。",
      conflictReason:
        "どちらも感情に影響されやすいため、すれ違った時に空気が重くなりやすいです。",
      advice:
        "感情を察して終わらせず、何が嫌だったのかを言葉にしてください。好きなものを共有する時間を作ると関係が戻りやすいです。",
    },
  },
  TERRA: {
    NOVA: {
      relationshipLabel: "始める人と続ける人",
      conversationScore: 74,
      workScore: 86,
      loveScore: 72,
      conflictRisk: "medium",
      complementLevel: "high",
      summary:
        "NOVAが初速を作り、TERRAが継続と現実化を支える関係です。役割分担ができるとかなり強い組み合わせです。",
      conflictReason:
        "NOVAの勢いをTERRAが不安に感じ、TERRAの慎重さをNOVAが重く感じることがあります。",
      advice:
        "NOVAは始めた後の責任をTERRAに押しつけすぎないこと。TERRAは最初から止めるのではなく、続けるための条件を提案すると噛み合います。",
    },
  },
  SOL: {
    VOID: {
      relationshipLabel: "決めたい人と納得したい人",
      conversationScore: 68,
      workScore: 70,
      loveScore: 60,
      conflictRisk: "high",
      complementLevel: "medium",
      summary:
        "SOLは早く決めて前に進み、VOIDは納得してから動きたいタイプです。判断の速度差がかなり出やすい関係です。",
      conflictReason:
        "SOLはVOIDを遅いと感じ、VOIDはSOLを雑だと感じやすいです。どちらも悪いわけではなく、判断のタイミングが違います。",
      advice:
        "SOLは決定前に一度だけVOIDの違和感を聞いてください。VOIDはすべてを完璧に詰める前に、最低限の懸念だけ共有すると噛み合いやすくなります。",
    },
    TERRA: {
      relationshipLabel: "決断と安定の現実派コンビ",
      conversationScore: 76,
      workScore: 90,
      loveScore: 74,
      conflictRisk: "medium",
      complementLevel: "high",
      summary:
        "SOLが決め、TERRAが現実的に支える関係です。作業や計画ではかなり強い組み合わせです。",
      conflictReason:
        "SOLが急ぎすぎるとTERRAが不安になり、TERRAが確認しすぎるとSOLが停滞に感じます。",
      advice:
        "SOLは最終判断を急ぎすぎず、TERRAは不安を具体的な確認項目に変えると噛み合います。",
    },
  },
  ECHO: {
    SOL: {
      relationshipLabel: "合わせる人と決める人",
      conversationScore: 72,
      workScore: 76,
      loveScore: 66,
      conflictRisk: "medium",
      complementLevel: "medium",
      summary:
        "SOLが方向を決め、ECHOが場に合わせて動く関係です。短期的には進みやすいですが、ECHOの本音が消えやすい組み合わせです。",
      conflictReason:
        "SOLはECHOの本音に気づかないまま進めやすく、ECHOは合わせながら少しずつ疲れていきます。",
      advice:
        "SOLは「本当はどう思う？」と確認する時間を作ってください。ECHOは合わせる前に、自分の希望を一言だけでも出すと関係が安定します。",
    },
  },
};

export const compatibilityRiskLabels: Record<CompatibilityRisk, string> = {
  low: "低",
  medium: "中",
  high: "高",
};
