import type { CSSProperties } from "react";
import type { PersonaType } from "../../types/persona";

type PersonaTypeAvatarProps = {
  size?: "sm" | "md" | "lg";
  type: PersonaType;
};

export function PersonaTypeAvatar({ size = "md", type }: PersonaTypeAvatarProps) {
  return (
    <span
      aria-label={`${type.code} ${type.name}`}
      className={[
        "persona-avatar",
        `persona-avatar--${size}`,
        `persona-avatar--${type.code.toLowerCase()}`,
      ].join(" ")}
      data-code={type.code}
      style={{ "--avatar-color": type.color } as CSSProperties}
      title={`${type.code} ${type.name}`}
    >
      <span className="persona-avatar__face">
        <span className="persona-avatar__eye" />
        <span className="persona-avatar__eye" />
        <span className="persona-avatar__mouth" />
      </span>
      <span className="persona-avatar__code">{type.code.slice(0, 1)}</span>
    </span>
  );
}
