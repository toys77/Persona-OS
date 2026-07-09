import type { PersonaTypeCode } from "./persona";

export const DIAGNOSIS_AXES = [
  "extraversion",
  "introspection",
  "emotionalSensitivity",
  "planning",
  "impulsiveness",
  "empathy",
  "originality",
  "approvalSensitivity",
] as const;

export type DiagnosisAxis = (typeof DIAGNOSIS_AXES)[number];

export type AnswerValue = -2 | -1 | 0 | 1 | 2;

export const ANSWER_VALUES = {
  stronglyDisagree: -2,
  disagree: -1,
  neutral: 0,
  agree: 1,
  stronglyAgree: 2,
} as const satisfies Record<string, AnswerValue>;

export type AnswerKey = keyof typeof ANSWER_VALUES;

export const ANSWER_OPTIONS: Array<{
  key: AnswerKey;
  label: string;
  value: AnswerValue;
}> = [
  {
    key: "stronglyDisagree",
    label: "まったく違う",
    value: ANSWER_VALUES.stronglyDisagree,
  },
  { key: "disagree", label: "少し違う", value: ANSWER_VALUES.disagree },
  { key: "neutral", label: "どちらとも言えない", value: ANSWER_VALUES.neutral },
  { key: "agree", label: "少し当てはまる", value: ANSWER_VALUES.agree },
  {
    key: "stronglyAgree",
    label: "とても当てはまる",
    value: ANSWER_VALUES.stronglyAgree,
  },
];

export type DiagnosisAnswers = Record<string, AnswerValue>;

export type AxisScores = Record<DiagnosisAxis, number>;

export type DiagnosisQuestion = {
  id: string;
  text: string;
  weights: Partial<Record<DiagnosisAxis, number>>;
};

export type TypeProfile = {
  typeCode: PersonaTypeCode;
  weights: Partial<Record<DiagnosisAxis, number>>;
};

export const initialAxisScores: AxisScores = {
  extraversion: 0,
  introspection: 0,
  emotionalSensitivity: 0,
  planning: 0,
  impulsiveness: 0,
  empathy: 0,
  originality: 0,
  approvalSensitivity: 0,
};
