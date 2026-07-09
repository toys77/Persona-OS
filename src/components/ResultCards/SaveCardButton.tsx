import { useState, type RefObject } from "react";
import { Button } from "../Button/Button";
import type { ResultCardType } from "../../types/card";
import type { PersonaResult } from "../../types/persona";
import { exportElementAsPng } from "../../utils/exportCardImage";

type SaveStatus = "idle" | "saving" | "success" | "error";

type SaveCardButtonProps = {
  targetRef: RefObject<HTMLElement>;
  result: PersonaResult;
  cardType: ResultCardType;
};

export function SaveCardButton({
  targetRef,
  result,
  cardType,
}: SaveCardButtonProps) {
  const [status, setStatus] = useState<SaveStatus>("idle");

  async function handleSave() {
    if (!targetRef.current || status === "saving") {
      return;
    }

    setStatus("saving");

    try {
      await exportElementAsPng(
        targetRef.current,
        `persona-os-${result.displayCode}-${cardType}.png`,
      );
      setStatus("success");
    } catch (error) {
      console.error("Failed to export result card", error);
      setStatus("error");
    }
  }

  return (
    <div className="save-card-control">
      <Button
        disabled={status === "saving"}
        fullWidth
        onClick={handleSave}
      >
        {status === "saving" ? "保存中..." : "画像として保存"}
      </Button>
      {status === "success" ? (
        <p className="save-message">画像の保存処理を開始しました。</p>
      ) : null}
      {status === "error" ? (
        <p className="form-error">
          画像の保存に失敗しました。もう一度お試しください。
        </p>
      ) : null}
    </div>
  );
}
