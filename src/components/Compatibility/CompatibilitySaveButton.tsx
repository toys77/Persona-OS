import { useState, type RefObject } from "react";
import { Button } from "../Button/Button";
import type { CompatibilityResult } from "../../types/compatibility";
import { exportElementAsPng } from "../../utils/exportCardImage";

type SaveStatus = "idle" | "saving" | "success" | "error";

type CompatibilitySaveButtonProps = {
  targetRef: RefObject<HTMLElement>;
  result: CompatibilityResult;
};

export function CompatibilitySaveButton({
  targetRef,
  result,
}: CompatibilitySaveButtonProps) {
  const [status, setStatus] = useState<SaveStatus>("idle");

  async function handleSave() {
    if (!targetRef.current || status === "saving") {
      return;
    }

    setStatus("saving");

    try {
      await exportElementAsPng(
        targetRef.current,
        `persona-os-compatibility-${result.selfDisplayCode}-${result.partnerDisplayCode}.png`,
      );
      setStatus("success");
    } catch (error) {
      console.error("Failed to export compatibility card", error);
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
        {status === "saving" ? "保存中..." : "相性カードを保存"}
      </Button>
      {status === "success" ? (
        <p className="save-message">相性カードの保存処理を開始しました。</p>
      ) : null}
      {status === "error" ? (
        <p className="form-error">
          画像の保存に失敗しました。もう一度お試しください。
        </p>
      ) : null}
    </div>
  );
}
