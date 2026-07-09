import {
  compatibilityMatrix,
  defaultCompatibilityPair,
  type CompatibilityPairData,
} from "../data/compatibilityMatrix";
import type {
  CompatibilityResult,
  CompatibilityRisk,
} from "../types/compatibility";
import type { PersonaTypeCode } from "../types/persona";

function clampScore(score: number): number {
  return Math.max(0, Math.min(100, score));
}

function createCompatibilityId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `compatibility-${crypto.randomUUID()}`;
  }

  return `compatibility-${Date.now()}`;
}

function raiseRisk(risk: CompatibilityRisk): CompatibilityRisk {
  if (risk === "low") {
    return "medium";
  }

  return risk;
}

export function getCompatibilityPairData(
  selfTypeCode: PersonaTypeCode,
  partnerTypeCode: PersonaTypeCode,
): CompatibilityPairData {
  return (
    compatibilityMatrix[selfTypeCode]?.[partnerTypeCode] ??
    compatibilityMatrix[partnerTypeCode]?.[selfTypeCode] ??
    defaultCompatibilityPair
  );
}

export function applySubtypeAdjustment(
  pairData: CompatibilityPairData,
  selfSubtypeNumber: number,
  partnerSubtypeNumber: number,
): CompatibilityPairData {
  const subtypeDistance = Math.abs(selfSubtypeNumber - partnerSubtypeNumber);
  let conversationAdjustment = 0;
  let conflictRisk = pairData.conflictRisk;

  if (selfSubtypeNumber === partnerSubtypeNumber) {
    conversationAdjustment += 3;
  }

  if (subtypeDistance >= 6) {
    conversationAdjustment -= 3;
    conflictRisk = raiseRisk(conflictRisk);
  }

  return {
    ...pairData,
    conversationScore: clampScore(
      pairData.conversationScore + conversationAdjustment,
    ),
    conflictRisk,
  };
}

export function calculateTotalCompatibilityScore(params: {
  conversationScore: number;
  workScore: number;
  loveScore: number;
}): number {
  return Math.round(
    params.conversationScore * 0.35 +
      params.workScore * 0.3 +
      params.loveScore * 0.35,
  );
}

export function createCompatibilityResult(params: {
  selfTypeCode: PersonaTypeCode;
  selfSubtypeNumber: number;
  partnerTypeCode: PersonaTypeCode;
  partnerSubtypeNumber: number;
}): CompatibilityResult {
  const basePairData = getCompatibilityPairData(
    params.selfTypeCode,
    params.partnerTypeCode,
  );
  const adjustedPairData = applySubtypeAdjustment(
    basePairData,
    params.selfSubtypeNumber,
    params.partnerSubtypeNumber,
  );
  const totalScore = calculateTotalCompatibilityScore({
    conversationScore: adjustedPairData.conversationScore,
    workScore: adjustedPairData.workScore,
    loveScore: adjustedPairData.loveScore,
  });

  return {
    id: createCompatibilityId(),
    createdAt: new Date().toISOString(),
    selfTypeCode: params.selfTypeCode,
    selfSubtypeNumber: params.selfSubtypeNumber,
    selfDisplayCode: `${params.selfTypeCode}-${params.selfSubtypeNumber}`,
    partnerTypeCode: params.partnerTypeCode,
    partnerSubtypeNumber: params.partnerSubtypeNumber,
    partnerDisplayCode: `${params.partnerTypeCode}-${params.partnerSubtypeNumber}`,
    relationshipLabel: adjustedPairData.relationshipLabel,
    totalScore,
    conversationScore: adjustedPairData.conversationScore,
    workScore: adjustedPairData.workScore,
    loveScore: adjustedPairData.loveScore,
    conflictRisk: adjustedPairData.conflictRisk,
    complementLevel: adjustedPairData.complementLevel,
    summary: adjustedPairData.summary,
    conflictReason: adjustedPairData.conflictReason,
    advice: adjustedPairData.advice,
  };
}
