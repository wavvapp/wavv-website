import local from "next/font/local";

export const Anton = local({
  src: [
    {
      path: "../../public/fonts/anton/Anton.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/anton/Anton.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-anton",
});

export const Mono = local({
  src: [
    {
      path: "../../public/fonts/iA Writer Mono/iAWriterMonoS-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iA Writer Mono/iAWriterMonoS-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/iA Writer Mono/iAWriterMonoS-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/iA Writer Mono/iAWriterMonoS-Regular.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/iA Writer Mono/iAWriterMonoV-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/iA Writer Mono/iAWriterMonoV.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-mono",
});
