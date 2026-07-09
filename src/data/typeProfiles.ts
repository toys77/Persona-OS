import type { TypeProfile } from "../types/diagnosis";

export const TYPE_PRIORITY = [
  "VOID",
  "LUNE",
  "NOVA",
  "RAVEN",
  "MUSE",
  "TERRA",
  "SOL",
  "ECHO",
] as const;

export const typeProfiles: TypeProfile[] = [
  {
    typeCode: "VOID",
    weights: {
      introspection: 3,
      originality: 3,
      emotionalSensitivity: 1,
      approvalSensitivity: 1,
      extraversion: -1,
    },
  },
  {
    typeCode: "LUNE",
    weights: {
      empathy: 3,
      emotionalSensitivity: 3,
      approvalSensitivity: 2,
      introspection: 1,
    },
  },
  {
    typeCode: "NOVA",
    weights: {
      extraversion: 3,
      impulsiveness: 3,
      empathy: 1,
      planning: -1,
    },
  },
  {
    typeCode: "RAVEN",
    weights: {
      introspection: 2,
      planning: 3,
      originality: 1,
      empathy: -1,
    },
  },
  {
    typeCode: "MUSE",
    weights: {
      originality: 3,
      emotionalSensitivity: 2,
      approvalSensitivity: 1,
      planning: -1,
    },
  },
  {
    typeCode: "TERRA",
    weights: {
      planning: 3,
      empathy: 1,
      emotionalSensitivity: -1,
      impulsiveness: -2,
    },
  },
  {
    typeCode: "SOL",
    weights: {
      impulsiveness: 2,
      extraversion: 2,
      planning: 1,
      empathy: -1,
    },
  },
  {
    typeCode: "ECHO",
    weights: {
      empathy: 3,
      approvalSensitivity: 2,
      emotionalSensitivity: 1,
      originality: -1,
    },
  },
];
