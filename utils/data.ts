export interface SummaryData {
  icon: string;
  title: string;
  score: number;
  textColor: "--red-400" | "--yellow-400" | "--green-500" | "--blue-800";
  bgColor: "--red-50" | "--yellow-50" | "--green-50" | "--blue-50";
}

export const summaryData: SummaryData[] = [
  {
    icon: "reaction",
    title: "Reaction",
    score: 80,
    textColor: "--red-400",
    bgColor: "--red-50",
  },
  {
    icon: "memory",
    title: "Memory",
    score: 92,
    textColor: "--yellow-400",
    bgColor: "--yellow-50",
  },
  {
    icon: "verbal",
    title: "Verbal",
    score: 61,
    textColor: "--green-500",
    bgColor: "--green-50",
  },
  {
    icon: "visual",
    title: "Visual",
    score: 73,
    textColor: "--blue-800",
    bgColor: "--blue-50",
  },
];
