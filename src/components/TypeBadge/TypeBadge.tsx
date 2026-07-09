import type { CSSProperties } from "react";
import type { PersonaTypeCode } from "../../types/persona";

type TypeBadgeProps = {
  code: PersonaTypeCode;
  color: string;
};

export function TypeBadge({ code, color }: TypeBadgeProps) {
  return (
    <span
      className="type-badge"
      style={{ "--badge-color": color } as CSSProperties}
    >
      {code}
    </span>
  );
}
