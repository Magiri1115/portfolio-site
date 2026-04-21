import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "ec-renewal",
    title: "ECサイト リニューアル",
    description: "コンバージョン率42%向上を実現したUXリデザインプロジェクト",
    tags: ["TypeScript", "Next.js", "Vercel"],
    targetUsers: [
      "20〜40代のオンラインショッピング利用者",
      "モバイルデバイスからの購入が70%を占める",
      "即座に商品を比較検討し、スムーズに購入したいユーザー",
    ],
    challenges: [
      {
        title: "課題1: カート放棄率が高い",
        items: ["カート到達後の離脱率が68%", "決済フローが5ステップと冗長"],
      },
      {
        title: "課題2: モバイル体験の低下",
        items: ["タップターゲットが小さく誤操作が多発", "ページ読み込み速度が平均4.2秒"],
      },
      {
        title: "課題3: 商品検索の使いづらさ",
        items: ["フィルター機能が限定的"],
      },
    ],
    dataBacking: [
      "コンバージョン率: 1.8%",
      "カート放棄率: 68%",
      "平均セッション時間: 2分15秒",
      "モバイル離脱率: 74%",
      "ページ速度: 4.2秒",
      "検索後の購入率: 12%",
    ],
    metrics: [
      { label: "コンバージョン率", value: "+42%", target: "目標: +30%以上" },
      { label: "カート放棄率", value: "-35%", target: "目標: -25%以上" },
      { label: "ページ読み込み速度", value: "1.8秒", target: "目標: 2秒以内" },
      { label: "モバイル離脱率", value: "-48%", target: "目標: -30%以上" },
    ],
    team: {
      composition: "5名（プロダクトマネージャー1名、デザイナー1名、エンジニア3名）",
      role: [
        "フロントエンド開発リード（TypeScript, Next.js, React）",
        "UXデザイナーと協働したプロトタイピングとユーザビリティテスト",
        "パフォーマンス最適化とCore Web Vitals改善",
      ],
    },
    uxImprovements: [
      {
        title: "1. チェックアウトフローの簡素化",
        items: ["5ステップから3ステップへ削減", "ゲスト購入オプションの追加"],
      },
      {
        title: "2. モバイル最適化",
        items: ["タップターゲット44px以上に統一", "スワイプジェスチャーでの操作追加"],
      },
      {
        title: "3. 検索・フィルター強化",
        items: ["ファセット検索の実装", "リアルタイム検索サジェスト"],
      },
    ],
    userTests: {
      methods: [
        "A/Bテスト（2週間、各グループ5,000セッション）",
        "ユーザビリティテスト（20名の参加者）",
        "ヒートマップ分析（Hotjar）",
      ],
      findings: [
        "ユーザーの85%が新フローを「使いやすい」と評価",
        "タスク完了時間が平均42%短縮",
        "エラー発生率が63%減少",
        "モバイルでの満足度スコアが7.2→8.9に向上",
      ],
    },
    chartData: {
      labels: ["Week 1", "Week 4", "Week 8", "Week 10", "Week 12", "Week 14"],
      datasets: [
        {
          label: "改善前",
          data: [1.8, 1.9, 1.7, 1.85, 1.8, 1.85],
          color: "#f87171",
        },
        {
          label: "改善後",
          data: [null, null, null, 1.85, 2.5, 3.2],
          color: "#60a5fa",
        },
      ],
    },
    techStack: [
      {
        name: "TypeScript",
        reasons: [
          "型安全性により開発時のバグを70%削減",
          "IDE補完による開発速度向上",
          "リファクタリングの安全性確保",
          "チーム全体のコード品質向上",
        ],
      },
      {
        name: "Next.js 14 (App Router)",
        reasons: [
          "SSR/SSGによる初期表示速度の最適化",
          "Image最適化でLCP 1.8秒を達成",
          "React Server Componentsで転送量削減",
          "組み込みルーティングによる開発効率化",
        ],
      },
      {
        name: "Vercel",
        reasons: [
          "エッジネットワークによる低レイテンシ配信",
          "自動スケーリングで急激なトラフィック対応",
          "プレビューデプロイでQA効率化",
          "Web Vitalsモニタリング標準搭載",
        ],
      },
      {
        name: "Tailwind CSS",
        reasons: [
          "ユーティリティファーストで高速UI開発",
          "デザインシステムの一貫性確保",
          "PurgeによるCSS最適化（28KB→4KB）",
          "レスポンシブデザインの効率化",
        ],
      },
      {
        name: "React Query",
        reasons: [
          "サーバー状態管理の標準化",
          "キャッシング戦略で不要なAPI呼び出し削減",
          "楽観的更新でUX向上",
          "エラーハンドリングの一元化",
        ],
      },
      {
        name: "Playwright (E2E Testing)",
        reasons: [
          "クリティカルフローの自動テスト",
          "クロスブラウザテストで互換性確保",
          "CI/CDパイプラインに統合",
          "リグレッション防止率98%達成",
        ],
      },
    ],
  },
  // Add other dummy projects to make it 6 items
  {
    id: "internal-dashboard",
    title: "社内ダッシュボード",
    description: "データ可視化により業務効率30%改善した分析ツール",
    tags: ["TypeScript", "React", "Chart.js"],
    techStack: [],
  },
  {
    id: "mobile-app",
    title: "モバイルアプリ開発",
    description: "ユーザー満足度4.8/5.0を獲得したネイティブアプリケーション",
    tags: ["TypeScript", "React Native"],
    techStack: [],
  },
  {
    id: "ai-chatbot",
    title: "AIチャットボット",
    description: "問い合わせ対応時間を65%削減したカスタマーサポートシステム",
    tags: ["TypeScript", "Node.js", "OpenAI API"],
    techStack: [],
  },
  {
    id: "reservation-system",
    title: "予約管理システム",
    description: "予約処理の自動化により運用コスト40%削減を実現",
    tags: ["TypeScript", "Vue.js", "Firebase"],
    techStack: [],
  },
  {
    id: "corporate-site",
    title: "コーポレートサイト",
    description: "アクセシビリティ対応とSEO最適化で検索流入200%増加",
    tags: ["TypeScript", "Astro", "Vercel"],
    techStack: [],
  },
];
