# Itta.dev

Itta Funahashiのプロフィールサイト。Next.js App RouterとTailwind CSSで実装しています。

## 開発

```bash
pnpm install
pnpm dev
```

開発サーバー: http://localhost:3000

```bash
pnpm lint
pnpm build
```

## デザイン

[Figmaの参照フレーム](https://www.figma.com/design/DnSG75QU2Fgj5aN9jrCXKW/Gen5?node-id=2696-1072)

1280px幅の参照フレームを基準に、MCPで取得した寸法を実装しています。

- 用紙: 幅680px、左右余白80px、内側の幅518px、枠線1px
- ロゴ: 389 × 92px、人物画像: 234 × 214px、バーコード: 320 × 72px
- 区切り線: 線幅1.5px、破線10px / 5px、上下間隔6px
- 文字: Arial / Arial Narrow / BIZ UDGothic、24 / 28 / 32px

画像素材は`public/images/`に配置しています。日時はアクセス時に閲覧端末の時刻を取得し、固定表示します。IDは固定表示です。BioのFailedチェックボックスをオンにすると、失敗歴をopacity 0.7で表示します。各セクションのファイルは`src/app/page.tsx`と同じ階層に配置し、区切り線はページ側で配置しています。狭い画面では余白と文字サイズを調整しています。
