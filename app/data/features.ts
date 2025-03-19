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
    title: "Let Friends Know You're Free",
    description:
      "Signal your availability with a single tap and show friends you're up for hanging out today.",
    image: "/images/wavv_img_02.png",
  },
  {
    title: "Control Who Sees Your Plans",
    description:
      "Choose who sees your availability. Share with everyone, specific friend groups, or specific friends.",
    image: "/images/wavv_img_03.png",
  },
  {
    title: "Make Meetups Effortless",
    description:
      "No more endless chats to figure out when to do what. Just tap to share your activity ideas, time, and location.",
    image: "/images/wavv_img_04.png",
  },
];
