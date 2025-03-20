export interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

export const features: FeatureCard[] = [
  {
    title: "Know Who's Going Out",
    description:
      "Stop wondering who's available. Get a overview of which friends are free and what they're planning today.",
    image: "/images/wavv_img_01.png",
  },
  {
    title: "Let Friends Know Your plans",
    description:
      "Broadcast your availability or plans to multiple friends at once.",
    image: "/images/wavv_img_02.png",
  },
  {
    title: "Control Who Sees What",
    description:
      "Choose who sees and get notified by your plan. Share with everyone, specific friend groups, or specific friends.",
    image: "/images/wavv_img_03.png",
  },
  {
    title: "Meet IRL, effortlessly",
    description:
      "No more endless chats to figure out plans. Just tap to share your activity ideas, time, and location.",
    image: "/images/wavv_img_04.png",
  },
];
