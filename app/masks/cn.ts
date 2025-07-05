import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f638",
    name: "说中文",
    context: [
      {
        id: "ai-0",
        role: "system",
        content: "请用中文回答",
        date: "",
      },
    ],
    modelConfig: {},
    lang: "cn",
    builtin: true,
    createdAt: 1688899480511,
  },
];
