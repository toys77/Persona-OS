import type { PersonaTypeCode } from "../types/persona";

export type HandlingText = {
  likes: string;
  dislikes: string;
  silentReason: string;
  reconciliation: string;
  consultationTip: string;
};

export const handlingTexts: Record<PersonaTypeCode, HandlingText> = {
  VOID: {
    likes: "考える時間を尊重されると安心する。",
    dislikes: "雑に決めつけられると一気に冷める。",
    silentReason: "納得していないか、頭の中で再構築している。",
    reconciliation: "感情論より、理由と改善案を出すと戻りやすい。",
    consultationTip: "結論だけでなく、背景から話すと理解しやすい。",
  },
  LUNE: {
    likes: "小さな変化に気づいてもらえると安心する。",
    dislikes: "気にしすぎ、と雑に流されると傷つく。",
    silentReason: "本音を言うと空気が悪くなると思っている。",
    reconciliation: "まず気持ちを受け止めてから話すと戻りやすい。",
    consultationTip: "強い言葉より、やわらかく確認する方が伝わる。",
  },
  NOVA: {
    likes: "勢いやアイデアを止めずに乗ってもらえると楽しい。",
    dislikes: "始める前から細かく否定されると冷める。",
    silentReason: "飽きたか、次に面白いことを探している。",
    reconciliation:
      "重く詰めるより、次にどうするかを明るく話すと戻りやすい。",
    consultationTip: "長い説明より、まず選択肢を短く出すと動きやすい。",
  },
  RAVEN: {
    likes: "筋の通った説明や、整理された話を好む。",
    dislikes: "空気読んで、と正しさを雑に封じられると冷める。",
    silentReason: "矛盾点を整理しているか、言う価値がないと判断している。",
    reconciliation:
      "感情だけで押さず、どこが問題だったかを具体化すると戻りやすい。",
    consultationTip: "目的、前提、制約を整理して話すと理解が速い。",
  },
  MUSE: {
    likes: "感性やこだわりを面白がってもらえると強くなる。",
    dislikes: "普通でいい、意味あるの、と言われると冷める。",
    silentReason: "心が動いていないか、表現する言葉を探している。",
    reconciliation: "正しさより、何を大事にしたかったかを聞くと戻りやすい。",
    consultationTip: "具体的な正解より、イメージや方向性から話すと伝わる。",
  },
  TERRA: {
    likes: "責任や継続をちゃんと見てもらえると安心する。",
    dislikes: "適当でいいじゃん、と準備を軽く見られると冷める。",
    silentReason: "自分が耐えれば済むと思って抱え込んでいる。",
    reconciliation:
      "感謝だけでなく、負担を減らす具体策を出すと戻りやすい。",
    consultationTip: "現実的な手順や期限を一緒に確認すると動きやすい。",
  },
  SOL: {
    likes: "決断や行動力を信頼されると前に進みやすい。",
    dislikes: "曖昧なまま待たされると強くストレスを感じる。",
    silentReason: "停滞に苛立っているか、自分で決めようとしている。",
    reconciliation: "結論を先に出し、必要な理由を短く話すと戻りやすい。",
    consultationTip: "迷っている理由より、決めるための条件を出すと伝わる。",
  },
  ECHO: {
    likes: "合わせていることに気づいてもらえると安心する。",
    dislikes: "自分の意見ないの、と責められると閉じる。",
    silentReason: "本音を出して空気が変わるのを避けている。",
    reconciliation: "急かさず、どちらでも大丈夫と伝えると戻りやすい。",
    consultationTip: "最初から意見を迫らず、選びやすい形で聞くと話しやすい。",
  },
};
