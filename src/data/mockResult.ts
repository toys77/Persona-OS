import type { PersonaResult } from "../types/persona";

export const mockPersonaResult: PersonaResult = {
  id: "mock-result-void-7",
  createdAt: new Date().toISOString(),
  typeCode: "VOID",
  subtypeNumber: 7,
  displayCode: "VOID-7",
  title: "再構築する観察者",
  surfaceFace: "静かな分析者",
  hiddenFace: "全部作り直したい人",
  landmine: "浅い正論",
  handling: "否定するなら代案も出せ",
  layers: {
    core: "違和感を見つけ、納得できる形に作り直す。",
    social: "大人数では静かだが、深い話題になると急に話す。",
    love: "雑に扱われると静かに冷める。",
    work: "目的に納得すると一気に進める。",
    dark: "全部微妙に見えて、急にリセットしたくなる。",
  },
  axisScores: {
    extraversion: -4,
    introspection: 16,
    emotionalSensitivity: 7,
    planning: 9,
    impulsiveness: -2,
    empathy: 3,
    originality: 15,
    approvalSensitivity: 8,
  },
};
