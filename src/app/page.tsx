import Link from "next/link";

const PHONE_NUMBER = "090-2982-1902";
const PHONE_HREF = "tel:09029821902";
const INSTAGRAM_URL = "https://www.instagram.com/hishojuku.official";
const ADDRESS = "青森県青森市富田5丁目6-11";

const features = [
  {
    title: "30年以上の指導実績",
    description:
      "プロ家庭教師として培ってきた指導ノウハウを活かし、つまずきの原因を的確に見つけて指導します。",
  },
  {
    title: "富田地区に密着",
    description:
      "地域に根ざした塾だからこそ、学校や部活動の状況も踏まえた無理のない通塾ペースを一緒に考えます。",
  },
  {
    title: "学年に合わせた個別指導",
    description:
      "小学生から高校生まで、学年や目標に応じて指導内容を調整。一人ひとりのペースを大切にします。",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-border-soft bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-heading text-xl font-bold text-accent">
            飛翔塾
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-foreground/80 sm:flex">
            <a href="#features" className="hover:text-brand">
              塾の特徴
            </a>
            <a href="#pricing" className="hover:text-brand">
              月謝
            </a>
            <a href="#access" className="hover:text-brand">
              アクセス
            </a>
          </nav>
          <Link
            href={PHONE_HREF}
            className="rounded-full bg-brand px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            電話で相談する
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b border-border-soft bg-gradient-to-b from-[#fff3e4] to-background">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-20 sm:py-28">
            <span className="rounded-full bg-brand/10 px-4 py-1 text-sm font-bold text-brand">
              青森市 富田地区の学習塾
            </span>
            <h1 className="font-heading text-4xl font-black leading-tight text-accent sm:text-5xl">
              富田地区で30年以上。
              <br />
              一人ひとりと向き合う学習塾
            </h1>
            <p className="max-w-xl text-lg leading-8 text-foreground/80">
              プロ家庭教師として30年以上の指導経験を持つ塾長が、小学生から高校生まで、
              生徒一人ひとりのペースに合わせて指導します。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={PHONE_HREF}
                className="flex h-12 items-center justify-center rounded-full bg-brand px-8 text-base font-bold text-white transition-colors hover:bg-brand-dark"
              >
                {PHONE_NUMBER} に電話する
              </Link>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-full border border-accent px-8 text-base font-bold text-accent transition-colors hover:bg-accent hover:text-white"
              >
                Instagramを見る
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-heading text-3xl font-bold text-accent">
            飛翔塾の特徴
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border-soft bg-surface p-6 shadow-sm"
              >
                <h3 className="font-heading text-lg font-bold text-brand">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border-soft bg-accent/5">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <h2 className="font-heading text-2xl font-bold text-accent">
              県立志望校合格に向けて
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-foreground/80">
              「毎年、県立志望校合格を目指し、一人ひとりに向き合った指導を続けています」。
              塾長自身の指導経験に基づく、無理のない学習計画で志望校合格をサポートします。
            </p>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-heading text-3xl font-bold text-accent">
            月謝の目安
          </h2>
          <div className="mt-10 rounded-2xl border border-border-soft bg-surface p-8 shadow-sm sm:p-10">
            <p className="font-heading text-4xl font-black text-brand">
              月額 8,000円 〜 18,000円
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/70">
              学年・指導内容により異なります。お子さまの学年や目標に合わせたプランをご提案しますので、
              まずはお気軽にお問い合わせください。
            </p>
          </div>
        </section>

        <section
          id="access"
          className="border-t border-border-soft bg-surface"
        >
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-accent">
                アクセス
              </h2>
              <dl className="mt-6 space-y-4 text-sm leading-7 text-foreground/80">
                <div>
                  <dt className="font-bold text-foreground">住所</dt>
                  <dd>{ADDRESS}</dd>
                </div>
                <div>
                  <dt className="font-bold text-foreground">電話番号</dt>
                  <dd>{PHONE_NUMBER}</dd>
                </div>
                <div>
                  <dt className="font-bold text-foreground">対象</dt>
                  <dd>小学生・中学生・高校生</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-accent px-8 py-10 text-white">
              <h3 className="font-heading text-xl font-bold">
                まずはお気軽にご相談ください
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/80">
                お電話またはInstagramのDMで、学習のお悩みをお聞かせください。
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={PHONE_HREF}
                  className="flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-accent transition-colors hover:bg-white/90"
                >
                  {PHONE_NUMBER} に電話する
                </Link>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center rounded-full border border-white px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  InstagramでDMする
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-soft bg-background">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-foreground/60">
          <span className="font-heading text-base font-bold text-accent">
            飛翔塾
          </span>
          <span>{ADDRESS}</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand"
          >
            Instagram: @hishojuku.official
          </a>
          <span className="mt-4">© 2026 飛翔塾</span>
        </div>
      </footer>
    </div>
  );
}
