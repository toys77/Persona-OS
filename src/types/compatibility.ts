import type { PersonaTypeCode } from "./persona";

export type CompatibilityRisk = "low" | "medium" | "high";

export type CompatibilityResult = {
  id: string;
  createdAt: string;
  selfTypeCode: PersonaTypeCode;
  selfSubtypeNumber: number;
  selfDisplayCode: string;
  partnerTypeCode: PersonaTypeCode;
  partnerSubtypeNumber: number;
  partnerDisplayCode: string;
  relationshipLabel: string;
  totalScore: number;
  conversationScore: number;
  workScore: number;
  loveScore: number;
  conflictRisk: CompatibilityRisk;
  complementLevel: CompatibilityRisk;
  summary: string;
  conflictReason: string;
  advice: string;
};
