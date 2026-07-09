import { toPng } from "html-to-image";

export async function exportElementAsPng(
  element: HTMLElement,
  fileName: string,
): Promise<void> {
  const dataUrl = await toPng(element, {
    backgroundColor: "#F2F3F5",
    cacheBust: true,
    pixelRatio: 2,
  });

  const link = document.createElement("a");
  link.download = fileName;
  link.href = dataUrl;
  link.click();
}
