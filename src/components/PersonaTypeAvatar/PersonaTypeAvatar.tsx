import { useEffect, useState, type CSSProperties } from "react";
import type { PersonaType, PersonaTypeCode } from "../../types/persona";

type PersonaTypeAvatarProps = {
  size?: "sm" | "md" | "lg";
  type: PersonaType;
  variant?: "plain" | "framed" | "hero";
};

const personaAvatarFiles = {
  VOID: "persona-void.png",
  LUNE: "persona-lune.png",
  NOVA: "persona-nova.png",
  RAVEN: "persona-raven.png",
  MUSE: "persona-muse.png",
  TERRA: "persona-terra.png",
  SOL: "persona-sol.png",
  ECHO: "persona-echo.png",
} satisfies Record<PersonaTypeCode, string>;

function getPersonaAvatarSrc(typeCode: PersonaTypeCode) {
  return `${import.meta.env.BASE_URL}assets/personas/${personaAvatarFiles[typeCode]}`;
}

export function PersonaTypeAvatar({
  size = "md",
  type,
  variant = "framed",
}: PersonaTypeAvatarProps) {
  const [canUseImage, setCanUseImage] = useState(true);
  const imageSrc = getPersonaAvatarSrc(type.code);

  useEffect(() => {
    setCanUseImage(true);
  }, [imageSrc]);

  return (
    <span
      aria-label={`${type.code} ${type.name}`}
      className={[
        "persona-avatar",
        `persona-avatar--${size}`,
        `persona-avatar--${variant}`,
        `persona-avatar--${type.code.toLowerCase()}`,
        canUseImage ? "persona-avatar--image" : "",
      ].join(" ")}
      data-code={type.code}
      style={{ "--avatar-color": type.color } as CSSProperties}
      title={`${type.code} ${type.name}`}
    >
      {canUseImage ? (
        <img
          alt=""
          aria-hidden="true"
          className="persona-avatar__image"
          decoding="async"
          draggable={false}
          onError={() => setCanUseImage(false)}
          src={imageSrc}
        />
      ) : null}
      <span className="persona-avatar__face">
        <span className="persona-avatar__eye" />
        <span className="persona-avatar__eye" />
        <span className="persona-avatar__mouth" />
      </span>
      <span className="persona-avatar__code">{type.code.slice(0, 1)}</span>
    </span>
  );
}
