import type { AxisScores } from "./diagnosis";

export type PersonaTypeCode =
  | "VOID"
  | "LUNE"
  | "NOVA"
  | "RAVEN"
  | "MUSE"
  | "TERRA"
  | "SOL"
  | "ECHO";

export type PersonaType = {
  code: PersonaTypeCode;
  name: string;
  title: string;
  shortDescription: string;
  surfaceFace: string;
  hiddenFace: string;
  landmine: string;
  handling: string;
  groupRole: string;
  color: string;
};

export type PersonaResult = {
  id: string;
  createdAt: string;
  typeCode: PersonaTypeCode;
  subtypeNumber: number;
  displayCode: string;
  title: string;
  surfaceFace: string;
  hiddenFace: string;
  landmine: string;
  handling: string;
  layers: {
    core: string;
    social: string;
    love: string;
    work: string;
    dark: string;
  };
  axisScores: AxisScores;
};
