import type { PersonaTypeCode } from "../types/persona";

export type PersonaSubtypeDefinition = {
  caution: string;
  description: string;
  name: string;
  number: number;
  strength: string;
};

export const personaSubtypes: PersonaSubtypeDefinition[] = [
  {
    number: 1,
    name: "安定型",
    description:
      "感情や状況が揺れても、まず足場を整えてから動く傾向があります。",
    strength: "継続力と安心感。場に落ち着きを戻せる。",
    caution: "変化の必要性に気づいても、少し先延ばしにしやすい。",
  },
  {
    number: 2,
    name: "内向型",
    description:
      "外側の刺激より、自分の内側で納得を作ってから動く傾向があります。",
    strength: "深い洞察と自己理解。ひとりで考える時間が精度になる。",
    caution: "考えを外に出すまで時間がかかり、誤解されやすい。",
  },
  {
    number: 3,
    name: "社交型",
    description:
      "人との反応や場の空気から、自分の動き方をつかむ傾向があります。",
    strength: "場をつなぐ対話力。人の温度を上げるのがうまい。",
    caution: "相手に合わせすぎて、自分の本音が後回しになりやすい。",
  },
  {
    number: 4,
    name: "感受性型",
    description:
      "小さな違和感や温度差を早く受け取り、言葉になる前の変化に気づく傾向があります。",
    strength: "繊細な察知力。空気の変化や本音の揺れを拾える。",
    caution: "受け取りすぎると、まだ起きていないことまで抱えやすい。",
  },
  {
    number: 5,
    name: "分析型",
    description:
      "感覚だけで流さず、構造や理由を見つけて整理する傾向があります。",
    strength: "整理力と検証力。複雑なものを扱える形にできる。",
    caution: "正しさを探しすぎると、動き出すタイミングを逃しやすい。",
  },
  {
    number: 6,
    name: "創作型",
    description:
      "感じたことを、自分なりの形や言葉に変換して外へ出す傾向があります。",
    strength: "表現力と発想力。曖昧な感覚に輪郭を与えられる。",
    caution: "現実の締切や制約を、気分が乗るまで後回しにしやすい。",
  },
  {
    number: 7,
    name: "再構築型",
    description:
      "違和感を見つけた瞬間に、全体を作り直したくなる傾向があります。",
    strength: "再設計する力。壊れた前提から新しい形を作れる。",
    caution: "完成前に壊しすぎて、周りがついてこられないことがある。",
  },
  {
    number: 8,
    name: "行動型",
    description:
      "考えすぎる前に、動きながら答えをつかみにいく傾向があります。",
    strength: "突破力と実行速度。止まった空気を前に進められる。",
    caution: "勢いが強い時ほど、周りの温度を置いていきやすい。",
  },
  {
    number: 9,
    name: "混沌型",
    description:
      "矛盾した感情や衝動を抱えながら、新しい形へ変えていく傾向があります。",
    strength: "変化への強さ。予定外の流れから面白いものを生める。",
    caution: "波が大きい時は、自分でも自分の優先順位を見失いやすい。",
  },
];

export function getSubtypeDefinition(
  subtypeNumber: number,
): PersonaSubtypeDefinition {
  return (
    personaSubtypes.find((subtype) => subtype.number === subtypeNumber) ??
    personaSubtypes[0]
  );
}

export function getSubtypeSentence(
  typeCode: PersonaTypeCode,
  subtypeNumber: number,
): string {
  const subtype = getSubtypeDefinition(subtypeNumber);

  return `あなたは${typeCode}の中でも、${subtype.description}`;
}
