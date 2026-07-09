import { personaTypes } from "../data/personaTypes";
import { resultLayerTexts } from "../data/resultTexts";
import { TYPE_PRIORITY, typeProfiles } from "../data/typeProfiles";
import type {
  AxisScores,
  DiagnosisAnswers,
  DiagnosisAxis,
  DiagnosisQuestion,
  TypeProfile,
} from "../types/diagnosis";
import { initialAxisScores } from "../types/diagnosis";
import type { PersonaResult, PersonaTypeCode } from "../types/persona";

function createInitialAxisScores(): AxisScores {
  return { ...initialAxisScores };
}

function createResultId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `result-${crypto.randomUUID()}`;
  }

  return `result-${Date.now()}`;
}

export function calculateAxisScores(
  questions: DiagnosisQuestion[],
  answers: DiagnosisAnswers,
): AxisScores {
  const axisScores = createInitialAxisScores();

  questions.forEach((question) => {
    const answerValue = answers[question.id];

    if (answerValue === undefined) {
      return;
    }

    Object.entries(question.weights).forEach(([axis, weight]) => {
      axisScores[axis as DiagnosisAxis] += answerValue * (weight ?? 0);
    });
  });

  return axisScores;
}

export function determinePersonaType(
  axisScores: AxisScores,
  profiles: TypeProfile[],
): PersonaTypeCode {
  let bestType: PersonaTypeCode = TYPE_PRIORITY[0];
  let bestScore = Number.NEGATIVE_INFINITY;
  let bestPriority: number = TYPE_PRIORITY.length;

  profiles.forEach((profile) => {
    const typeScore = Object.entries(profile.weights).reduce(
      (total, [axis, weight]) =>
        total + axisScores[axis as DiagnosisAxis] * (weight ?? 0),
      0,
    );
    const priority = TYPE_PRIORITY.indexOf(profile.typeCode);

    if (
      typeScore > bestScore ||
      (typeScore === bestScore && priority < bestPriority)
    ) {
      bestType = profile.typeCode;
      bestScore = typeScore;
      bestPriority = priority;
    }
  });

  return bestType;
}

export function determineSubtypeNumber(axisScores: AxisScores): number {
  const subtypeScores: Record<number, number> = {
    1: axisScores.planning - axisScores.emotionalSensitivity,
    2: axisScores.introspection - axisScores.extraversion,
    3: axisScores.extraversion + axisScores.empathy,
    4: axisScores.emotionalSensitivity,
    5: axisScores.planning + axisScores.introspection,
    6: axisScores.originality + axisScores.emotionalSensitivity,
    7: axisScores.originality + axisScores.introspection,
    8: axisScores.impulsiveness + axisScores.extraversion,
    9:
      axisScores.emotionalSensitivity +
      axisScores.impulsiveness -
      axisScores.planning,
  };

  return Object.entries(subtypeScores).reduce(
    (bestNumber, [subtypeNumber, score]) => {
      const nextNumber = Number(subtypeNumber);
      const bestScore = subtypeScores[bestNumber];

      if (score > bestScore || (score === bestScore && nextNumber < bestNumber)) {
        return nextNumber;
      }

      return bestNumber;
    },
    1,
  );
}

export function generatePersonaResult(
  typeCode: PersonaTypeCode,
  subtypeNumber: number,
  axisScores: AxisScores,
): PersonaResult {
  const personaType = personaTypes.find((type) => type.code === typeCode);

  if (!personaType) {
    throw new Error(`Unknown persona type: ${typeCode}`);
  }

  return {
    id: createResultId(),
    createdAt: new Date().toISOString(),
    typeCode,
    subtypeNumber,
    displayCode: `${typeCode}-${subtypeNumber}`,
    title: personaType.name,
    surfaceFace: personaType.surfaceFace,
    hiddenFace: personaType.hiddenFace,
    landmine: personaType.landmine,
    handling: personaType.handling,
    layers: resultLayerTexts[typeCode],
    axisScores,
  };
}

export function runDiagnosis(
  questions: DiagnosisQuestion[],
  answers: DiagnosisAnswers,
): PersonaResult {
  const axisScores = calculateAxisScores(questions, answers);
  const typeCode = determinePersonaType(axisScores, typeProfiles);
  const subtypeNumber = determineSubtypeNumber(axisScores);

  return generatePersonaResult(typeCode, subtypeNumber, axisScores);
}
