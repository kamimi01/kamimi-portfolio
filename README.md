# kamimi-portfolio

![PC用ポートフォリオ](assets/portfolio_web.png "portfolio_web")

## このサイトについて

- Kamimi のポートフォリオサイト
- リンク
  - [kamimi-portfolio](https://kamimiportfolioproject.web.app)

## ローカル開発

### 前提条件

- `firebase-tools`の npm モジュールがインストールされていること
- `firebase login`を実行して、ログインしていること
  - 長期間ログイン状態の場合、次回以降にデプロイなどの操作をしようとするとエラーになるため、`firebase logout`後に再度`firebase login`を行う必要がある
  - 参考
    - [Firebase は長期間ログアウトしていないアカウントだとエラーが返る](https://iwb.jp/firebase-account-returns-error-not-login-long-time/)

### 各種コマンド

- デプロイする

  - `firebase deploy`

- Firebase プロジェクトをローカルで実行してテストする

  - `firebase serve --only hosting`

- 参考
  - [Firebase CLI リファレンス](https://firebase.google.com/docs/cli?hl=ja#macos)

## 実装完了までの手順

1. デザイン検討 (実工数：約 3 時間)

- 下記を参考に検討
  - デザイン入門教室(書籍)
  - Pinterest に掲載されているデザイン
  - 実際のエンジニア・デザイナーのポートフォリオ
  - 配色は下記から選択
    - 参考：https://www.canva.com/ja_jp/learn/100-color-combinations/

2. コンテンツ検討 (実工数：約 1 時間)

- 下記を参考に検討
  - 「エンジニア ポートフォリオ」で Goolge 検索して出てきた転職サイト
  - 実際のエンジニア・デザイナーのポートフォリオ
- 画像などの素材
  - 自分で撮った写真
  - <a href="https://ai-art.tokyo/">AI 画伯</a>で作成した画像(ツール使わせていただきました!ありがとうございます)

3. モックアップ作成 (実工数：約 4 時間)

- pptx で作成

3. コーディング (実工数：約 17 時間)

4. Web サイトを公開 (実工数：約 2 時間)

- Firebase で公開
- 参考：https://dotinstall.com/lessons/hosting_firebase

## 工夫したこと

- グローバルメニュを固定配置し、どのページにいてもすぐ別のコンテンツをみることができる
- レスポンシブ対応を行った
- コンテンツごとの切り口に svg を用いて波線にした(参考：http://tympanus.net/codrops/2013/10/03/a-collection-of-separator-styles/)
- PC では、プロダクトのスクリーンショットの上にカーソルを当てると、別コンポーネントが現れる(参考：https://blog.raizzenet.com/mouse-hover-caption-effects-in-css/)
- コンタクトのメールアイコンを押下すると、メールアドレスをクリップボードにコピーすることができる
- メールアドレスをコピーすると、ツールチップを表示する(参考：https://www.jungleocean.com/programming/190308tooltip-css)

## 使用

### 言語

- HTML
- CSS
- JavaScript

### ライブラリ・フレームワーク

- Bootstrap
- jQuery
- Fontawesome
- Firebase

### ツール

- Visual Studio Code
