import type { DiagnosisQuestion } from "../types/diagnosis";

export const diagnosisQuestions: DiagnosisQuestion[] = [
  {
    id: "q01",
    text: "人と話しているうちに、だんだん元気が出てくることが多い。",
    weights: {
      extraversion: 2,
      empathy: 1,
    },
  },
  {
    id: "q02",
    text: "自分の考えや感情を、頭の中で何度も整理してしまう。",
    weights: {
      introspection: 2,
      emotionalSensitivity: 1,
    },
  },
  {
    id: "q03",
    text: "場の空気が悪くなる前に、なんとなく違和感に気づく。",
    weights: {
      empathy: 2,
      emotionalSensitivity: 1,
    },
  },
  {
    id: "q04",
    text: "予定や手順が決まっていないと、少し落ち着かない。",
    weights: {
      planning: 2,
      impulsiveness: -1,
    },
  },
  {
    id: "q05",
    text: "面白そうだと思ったら、細かいことを考える前に動きたくなる。",
    weights: {
      impulsiveness: 2,
      extraversion: 1,
      planning: -1,
    },
  },
  {
    id: "q06",
    text: "人と同じことをするより、自分なりのやり方を探したくなる。",
    weights: {
      originality: 2,
      introspection: 1,
    },
  },
  {
    id: "q07",
    text: "褒められるより、ちゃんと理解される方が嬉しい。",
    weights: {
      approvalSensitivity: 2,
      introspection: 1,
      originality: 1,
    },
  },
  {
    id: "q08",
    text: "誰かの雑な一言を、思ったより長く覚えている。",
    weights: {
      emotionalSensitivity: 2,
      approvalSensitivity: 1,
    },
  },
  {
    id: "q09",
    text: "誰も動かない状況を見ると、自分が先に動いた方が早いと思う。",
    weights: {
      extraversion: 1,
      impulsiveness: 2,
    },
  },
  {
    id: "q10",
    text: "間違いや矛盾に気づくと、黙っているのが難しい。",
    weights: {
      introspection: 1,
      planning: 1,
      originality: 1,
    },
  },
  {
    id: "q11",
    text: "相手の返信が少し冷たいだけで、理由を考えてしまう。",
    weights: {
      emotionalSensitivity: 2,
      empathy: 1,
      approvalSensitivity: 1,
    },
  },
  {
    id: "q12",
    text: "好きなものについて話す時だけ、急に熱量が上がる。",
    weights: {
      originality: 2,
      approvalSensitivity: 1,
    },
  },
  {
    id: "q13",
    text: "その場のノリで始めたことが、後から面倒になることがある。",
    weights: {
      impulsiveness: 2,
      planning: -1,
    },
  },
  {
    id: "q14",
    text: "自分が我慢すれば場が丸く収まるなら、そうしてしまうことがある。",
    weights: {
      empathy: 2,
      emotionalSensitivity: 1,
      approvalSensitivity: 1,
    },
  },
  {
    id: "q15",
    text: "人に任せるより、自分で管理した方が安心する。",
    weights: {
      planning: 2,
      introspection: 1,
    },
  },
  {
    id: "q16",
    text: "長く考えすぎて、結局動き出しが遅くなることがある。",
    weights: {
      introspection: 2,
      planning: 1,
      impulsiveness: -1,
    },
  },
  {
    id: "q17",
    text: "初対面では、まず相手や場の様子を見ることが多い。",
    weights: {
      introspection: 1,
      empathy: 1,
      extraversion: -1,
    },
  },
  {
    id: "q18",
    text: "決めるべきことが決まらない状態が続くと、かなりストレスを感じる。",
    weights: {
      planning: 2,
      impulsiveness: 1,
    },
  },
  {
    id: "q19",
    text: "普通でいいと言われると、少しつまらなく感じる。",
    weights: {
      originality: 2,
    },
  },
  {
    id: "q20",
    text: "相手に合わせるのは得意だが、自分の本音がわからなくなることがある。",
    weights: {
      empathy: 2,
      emotionalSensitivity: 1,
      approvalSensitivity: 1,
    },
  },
  {
    id: "q21",
    text: "正しいと思ったことは、多少空気が悪くなっても言った方がいいと思う。",
    weights: {
      planning: 1,
      introspection: 1,
      empathy: -1,
    },
  },
  {
    id: "q22",
    text: "一度冷めると、それまで好きだったものにも急に距離を置きたくなる。",
    weights: {
      emotionalSensitivity: 2,
      originality: 1,
    },
  },
  {
    id: "q23",
    text: "自分の中で意味があると思えない作業には、なかなか集中できない。",
    weights: {
      originality: 2,
      introspection: 1,
      planning: -1,
    },
  },
  {
    id: "q24",
    text: "周りが雑に進めていると、後で困るのが見えて気になる。",
    weights: {
      planning: 2,
      introspection: 1,
    },
  },
  {
    id: "q25",
    text: "人からどう見られているかを、考えないようにしても考えてしまう。",
    weights: {
      approvalSensitivity: 2,
      emotionalSensitivity: 1,
    },
  },
  {
    id: "q26",
    text: "盛り上がっている場では、自分も自然とテンションが上がる。",
    weights: {
      extraversion: 2,
      empathy: 1,
    },
  },
  {
    id: "q27",
    text: "相手の感情を優先しすぎて、自分の疲れを後回しにすることがある。",
    weights: {
      empathy: 2,
      emotionalSensitivity: 1,
    },
  },
  {
    id: "q28",
    text: "迷っているくらいなら、とりあえず動いてから考えた方がいいと思う。",
    weights: {
      impulsiveness: 2,
      extraversion: 1,
      planning: -1,
    },
  },
  {
    id: "q29",
    text: "自分のこだわりを雑に扱われると、表には出さなくてもかなり冷める。",
    weights: {
      originality: 2,
      approvalSensitivity: 1,
      emotionalSensitivity: 1,
    },
  },
  {
    id: "q30",
    text: "場を壊さないために、本当は言いたいことを飲み込むことがある。",
    weights: {
      empathy: 2,
      approvalSensitivity: 1,
      emotionalSensitivity: 1,
    },
  },
];
