import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Maru_Gothic } from "next/font/google";
import { AppMotionConfig } from "@/components/motion-config";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

export const metadata: Metadata = {
  title: "飛翔塾 | 青森市富田地区の個別学習塾",
  description:
    "青森市富田地区で30年以上の指導実績を持つ塾長が教える、地元密着型の個別学習塾。小学生から高校生まで、一人ひとりに合わせた指導で県立志望校合格をサポートします。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${zenMaruGothic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.025] mix-blend-overlay" aria-hidden>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <AppMotionConfig>{children}</AppMotionConfig>
      </body>
    </html>
  );
}
