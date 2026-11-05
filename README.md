# juku-hp-template

学習塾向けテンプレート型HP制作の開発リポジトリ。

## 想定構成
- フロントエンド: Next.js 16(App Router) + Tailwind CSS、Vercelデプロイ
- コンテンツ管理: microCMS(クライアントが自分で編集できるCMS。従来型DBは使わない)
- インフラ所有: 開発者(自分)側のmicroCMS/Vercelアカウントで一元管理し、クライアントにはCMSの編集ログインのみ発行する
- 問い合わせフォーム: 当面はメール転送のみ(DB保存なし)。予約・会員機能が必要になったらSupabase(PostgreSQL)を追加検討

## 進め方
1. ベーステンプレートをこのリポジトリで開発
2. 案件ごとにブランチ or 別リポジトリで複製してカスタマイズ
3. 納品後も開発者側インフラ上で運用し、月額保守費で継続収益化する

## 営業対象(2026年11月時点・青森市 学習塾)
1. 飛翔塾(Instagram DM) — 最優先、公式サイトなし
2. 西澤塾(手紙+電話)
3. 学習塾TRM登龍門(手紙+電話)
4. 個別指導の青森市未来塾(X DM、優先度やや低)

## 開発環境
```bash
npm run dev    # 開発サーバー起動(http://localhost:3000)
npm run build  # 本番ビルド
npm run lint   # Lint実行
```

Next.js 16は破壊的変更を含むため、実装前に `node_modules/next/dist/docs/` 配下のドキュメントを確認すること(詳細は `AGENTS.md` 参照)。
