import Image from "next/image";

import {
  CountUp,
  FloatingPetal,
  HoverLift,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion";

const PHONE_NUMBER = "090-2982-1902";
const PHONE_HREF = "tel:09029821902";
const INSTAGRAM_URL = "https://www.instagram.com/hishojuku.official";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/%E9%A3%9B%E7%BF%94%E5%A1%BE+(%E5%AD%A6%E7%BF%92%E5%A1%BE%EF%BC%89/@40.8330839,140.7161015,17z/data=!3m1!4b1!4m6!3m5!1s0x5f9b9f780a4adacf:0x318238075e687d40!8m2!3d40.8330839!4d140.7161015!16s%2Fg%2F11nvzjnrd4";
const ADDRESS = "青森県青森市富田5丁目6-11";

function StarRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-badge-gold ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.2 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function WaveDivider({ fill = "var(--accent)" }: { fill?: string }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className="relative block h-[60px] w-full sm:h-[90px]"
      aria-hidden
    >
      <path
        fill={fill}
        d="M0 40 C 240 90 480 0 720 20 C 960 40 1200 85 1440 35 L1440 90 L0 90 Z"
      />
    </svg>
  );
}

const reasons = [
  {
    number: 1,
    color: "bg-badge-blue",
    icon: "/illustrations/icon-experience.png",
    title: "指導歴30年以上の経験と実績",
    description: "プロ家庭教師として培ってきた指導ノウハウで、一人ひとりに最適な指導を行います。",
  },
  {
    number: 2,
    color: "bg-badge-red",
    icon: "/illustrations/icon-success.png",
    title: "高校受験で公立志望校合格を目指す指導",
    description: "志望校合格を目標に、無理のない学習計画を一緒に立てて伴走します。",
  },
  {
    number: 3,
    color: "bg-badge-teal",
    icon: "/illustrations/icon-personal.png",
    title: "一人ひとりに合わせた個別指導",
    description: "学年や目標、理解度に応じて指導内容を調整。生徒それぞれのペースを大切にします。",
  },
  {
    number: 4,
    color: "bg-badge-purple",
    icon: "/illustrations/icon-local.png",
    title: "富田地区に根ざした地域密着の指導",
    description: "地域に根ざした塾だからこそ、学校や部活動の状況も踏まえた無理のない通塾ペースを一緒に考えます。",
  },
  {
    number: 5,
    color: "bg-badge-gold",
    icon: null,
    title: "通いやすい料金設定",
    description: "月額8,000円〜18,000円。無理なく続けられる料金設定を心がけています。",
  },
];

const steps = [
  {
    title: "お問い合わせ",
    description: "お電話またはInstagramのDMで、学習のお悩みをお聞かせください。",
  },
  {
    title: "学習相談",
    description: "お子さまの現状と目標をヒアリングし、指導方針をご提案します。",
  },
  {
    title: "ご入塾・指導開始",
    description: "学年・目標に合わせたプランで、無理のないペースの指導をスタートします。",
  },
];

const newsItems = [
  {
    date: "2026.11.01",
    tag: "お知らせ",
    tagColor: "bg-badge-blue",
    title: "冬期講習(12月〜1月)の受付を開始しました。学年・目標に合わせた集中プランをご用意しています。",
  },
  {
    date: "2026.10.15",
    tag: "イベント",
    tagColor: "bg-badge-red",
    title: "無料の学習相談会を実施中です。お電話またはInstagramのDMからお気軽にお問い合わせください。",
  },
  {
    date: "2026.09.01",
    tag: "お知らせ",
    tagColor: "bg-badge-teal",
    title: "2学期の時間割を更新しました。詳しくは面談時にご案内しています。",
  },
];

const faqs = [
  {
    question: "体験授業や無料相談はありますか?",
    answer:
      "はい。まずは無料相談の中で、お子さまに合った指導内容をご提案しています。お気軽にお問い合わせください。",
  },
  {
    question: "どの学年から通えますか?",
    answer: "小学生から高校生まで対応しています。学年や目標に合わせて指導内容を調整します。",
  },
  {
    question: "月謝以外に費用はかかりますか?",
    answer: "教材費など詳細な費用については、面談時に個別にご案内しています。",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-16 md:pb-0">
      <header className="sticky top-0 z-20 border-b border-border-soft bg-surface/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-heading text-xl font-bold text-accent">飛翔塾</span>
          <nav className="hidden gap-8 text-sm font-medium text-foreground/80 md:flex">
            {[
              ["#reasons", "選ばれる理由"],
              ["#news", "お知らせ"],
              ["#voice", "保護者・生徒の声"],
              ["#pricing", "月謝"],
              ["#faq", "よくある質問"],
              ["#access", "アクセス"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative py-1 transition-colors hover:text-brand after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={PHONE_HREF}
            className="rounded-full bg-brand px-5 py-2 text-sm font-bold text-white shadow-md shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/40"
          >
            電話で相談する
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-sakura-soft via-background to-background">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sakura/20 blur-3xl" />
          <FloatingPetal className="pointer-events-none absolute left-[8%] top-16 h-8 w-8 text-sakura/70" duration={7} />
          <FloatingPetal className="pointer-events-none absolute right-[15%] top-40 h-10 w-10 text-sakura/50" duration={9} delay={1.2} />
          <FloatingPetal className="pointer-events-none absolute left-[40%] top-6 h-6 w-6 text-sakura/60" duration={5.5} delay={0.6} />
          <FloatingPetal className="pointer-events-none absolute right-[38%] top-24 h-5 w-5 text-sakura/40" duration={8} delay={2} />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr]">
            <StaggerGroup className="flex flex-col items-start gap-6" onMount>
              <StaggerItem>
                <span className="rounded-full bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                  青森市 富田地区の学習塾
                </span>
              </StaggerItem>
              <StaggerItem>
                <h1 className="font-heading text-[clamp(2.5rem,4vw+1.2rem,4.25rem)] font-black leading-[1.08] tracking-tight text-accent">
                  富田地区で30年以上。
                  <br />
                  一人ひとりと
                  <br className="sm:hidden" />
                  向き合う学習塾
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="max-w-xl text-lg leading-8 text-foreground/80">
                  プロ家庭教師として30年以上の指導経験を持つ塾長が、小学生から高校生まで、
                  生徒一人ひとりのペースに合わせて指導します。
                </p>
              </StaggerItem>

              <StaggerItem>
                <HoverLift>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-border-soft bg-surface px-5 py-3 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="font-heading text-2xl font-black text-accent">5.0</span>
                    <div>
                      <StarRow />
                      <p className="mt-0.5 text-xs font-medium text-foreground/60">
                        Googleクチコミより ・ 地域の保護者様からの評価
                      </p>
                    </div>
                  </a>
                </HoverLift>
              </StaggerItem>

              <StaggerItem className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="flex h-12 items-center justify-center rounded-full bg-brand px-8 text-base font-bold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/40 active:translate-y-0"
                >
                  {PHONE_NUMBER} に電話する
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center rounded-full border border-accent px-8 text-base font-bold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                >
                  Instagramを見る
                </a>
              </StaggerItem>
            </StaggerGroup>

            <Reveal delay={0.3} onMount className="relative mx-auto w-full max-w-md">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brand/15 to-sakura/25 blur-2xl" />
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/illustrations/hero-illustration.png"
                  alt="飛翔塾の先生が生徒に寄り添って指導するイラスト"
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </Reveal>
          </div>

          <WaveDivider />
        </section>

        <section className="-mt-px bg-accent">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 pb-10 pt-4 sm:grid-cols-4 sm:pt-6">
            <div className="text-center text-white">
              <p className="font-heading text-2xl font-black sm:text-3xl">
                <CountUp value={30} suffix="年以上" />
              </p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">塾長の指導実績</p>
            </div>
            <div className="text-center text-white">
              <p className="font-heading text-2xl font-black sm:text-3xl">
                <CountUp value={5} decimals={1} />
              </p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">Googleクチコミ評価</p>
            </div>
            <div className="text-center text-white">
              <p className="font-heading text-2xl font-black sm:text-3xl">8,000円〜</p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">月謝</p>
            </div>
            <div className="text-center text-white">
              <p className="font-heading text-2xl font-black sm:text-3xl">小4〜高3</p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">対応学年</p>
            </div>
          </div>
        </section>

        <section id="reasons" className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">5 Reasons</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-accent sm:text-4xl">
              飛翔塾が選ばれる5つの理由
            </h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {reasons.map((reason) => (
              <StaggerItem key={reason.number}>
                <HoverLift className="h-full rounded-2xl border border-border-soft bg-surface p-6 shadow-sm transition-shadow hover:shadow-lg">
                  {reason.icon ? (
                    <div className="relative mx-auto mb-4 h-24 w-24 transition-transform duration-300 hover:scale-105">
                      <Image
                        src={reason.icon}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 h-24" aria-hidden />
                  )}
                  <div className="flex gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-heading text-sm font-black text-white ${reason.color}`}
                    >
                      {reason.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-accent">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-foreground/70">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section id="news" className="border-t border-border-soft bg-surface py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-brand">News</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-accent sm:text-4xl">
                塾からのお知らせ
              </h2>
            </Reveal>
            <StaggerGroup className="mt-14 space-y-4" stagger={0.08}>
              {newsItems.map((item) => (
                <StaggerItem key={item.title}>
                  <HoverLift className="flex flex-col gap-3 rounded-2xl border border-border-soft bg-background p-6 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:gap-6">
                    <div className="flex shrink-0 items-center gap-3 sm:w-44">
                      <time className="text-sm font-bold text-foreground/50">{item.date}</time>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold text-white ${item.tagColor}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm font-medium leading-7 text-foreground/80">
                      {item.title}
                    </p>
                  </HoverLift>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section id="voice" className="border-y border-border-soft bg-sakura-soft/60">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Reveal className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-brand">Voice</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-accent sm:text-4xl">
                保護者・生徒の声
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 rounded-2xl border border-border-soft bg-surface p-8 shadow-sm sm:p-10">
              <StarRow className="h-5 w-5" />
              <p className="mt-4 text-lg leading-8 text-foreground/80">
                「元生徒でした。志望校に点数が足りなかったのですが、こちらの講師に教えてもらい、
                合計100点近く点数が上がり、無事志望校に合格することができました。おすすめの塾です。」
              </p>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-bold text-accent">元生徒 yk 様</p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-foreground/50 hover:text-brand"
                >
                  Google口コミより見る →
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">Flow</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-accent sm:text-4xl">
              ご入塾までの流れ
            </h2>
          </Reveal>
          <StaggerGroup className="relative mt-14 grid gap-8 sm:grid-cols-3" stagger={0.12}>
            <div className="pointer-events-none absolute top-[2.25rem] left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-border-soft to-transparent sm:block" />
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative rounded-2xl border border-border-soft bg-surface p-6 shadow-sm">
                  <span className="font-heading text-4xl font-black text-brand/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-accent">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/70">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section id="pricing" className="border-t border-border-soft bg-sakura-soft/60 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-brand">Price</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-accent sm:text-4xl">月謝の目安</h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 rounded-2xl border border-border-soft bg-surface p-8 text-center shadow-sm sm:p-10">
              <p className="font-heading text-4xl font-black text-brand sm:text-5xl">
                月額 8,000円 〜 18,000円
              </p>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-foreground/70">
                学年・指導内容により異なります。お子さまの学年や目標に合わせたプランをご提案しますので、
                まずはお気軽にお問い合わせください。
              </p>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
          <Reveal className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand">FAQ</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-accent sm:text-4xl">よくある質問</h2>
          </Reveal>
          <StaggerGroup className="mt-10 space-y-4" stagger={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.question}>
                <details className="group rounded-2xl border border-border-soft bg-surface p-6 shadow-sm transition-shadow hover:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-accent">
                    {faq.question}
                    <span className="ml-4 text-brand transition-transform duration-300 group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-foreground/70">{faq.answer}</p>
                </details>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section id="access" className="border-t border-border-soft bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:grid-cols-2">
            <Reveal>
              <h2 className="font-heading text-3xl font-bold text-accent">アクセス</h2>
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
            </Reveal>
            <Reveal delay={0.15} className="flex flex-col justify-center rounded-2xl bg-accent px-8 py-10 text-white shadow-xl shadow-accent/20">
              <h3 className="font-heading text-xl font-bold">まずはお気軽にご相談ください</h3>
              <p className="mt-3 text-sm leading-7 text-white/80">
                お電話またはInstagramのDMで、学習のお悩みをお聞かせください。
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={PHONE_HREF}
                  className="flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-accent transition-all hover:-translate-y-0.5 hover:bg-white/90"
                >
                  {PHONE_NUMBER} に電話する
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center rounded-full border border-white px-6 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  InstagramでDMする
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-soft bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-foreground/60">
          <span className="font-heading text-base font-bold text-accent">飛翔塾</span>
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

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border-soft bg-surface/95 p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] backdrop-blur md:hidden">
        <a
          href={PHONE_HREF}
          className="flex h-12 w-full items-center justify-center rounded-full bg-brand text-base font-bold text-white shadow-md"
        >
          {PHONE_NUMBER} に電話で相談する
        </a>
      </div>
    </div>
  );
}
