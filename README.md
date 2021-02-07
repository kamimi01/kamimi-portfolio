# kamimi-portfolio

## このサイトについて

- フロントエンドのみのポートフォリオサイト

## デモ(PC 用表示のみ)

![PC用ポートフォリオ](assets/portfolio_web.png "portfolio_web")

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

### 改善できること(および反省)

- html ファイルと css ファイルが一つのみで、肥大化している
  - ejs を導入し、ファイルを分割する
- 英語対応を行う
  - Nust.js のライブラリ(vue-i18n)を導入する
- スマホでのスムーススクロールを実現すること(Web では対応済み)
  - `-webkit-overflow-scrolling`で実装可能とのことでやってみたが、適用されなかった
  - また上記のプロパティは、MDN のサイトによると非標準のため、できれば別方法を試したい
  - 参考：https://developer.mozilla.org/ja/docs/Web/CSS/-webkit-overflow-scrolling
- Bootstrap のデフォルトのスタイルを打ち消すため、HTML ファイル内でスタイルを使用しているので、それをやめたい。
  - CSS ファイルにスタイルを記載したが、適用されなかったため、止む無く HTML ファイルのタグ内に記載した
- 元々、View フォルダの中に html を格納していたが、Firebase でデプロイする際に、public 直下に index.html が必要とのことだったので、フォルダ構成・ファイル名を変更したのだが、本当は自分の好みのフォルダ構成でデプロイできるようにしたい
- 当初、モックアップが全くない状態で作り始めたのだが、細かいデザインや挙動などをどうするかを考えながらコーディングをしていると手戻りが発生したりして効率が悪かった
  - 最初から簡単にでもモックアップを作成してからコーディングを始めた方がよかった(今回は途中からモックアップ作成を行なった)
- プロダクトのコンテンツのデザインが微妙..
- プロダクトの情報が少ない
- 画像サイズが大きいせいか、読み込みが遅い

### 今後導入してみたいこと

- Vue.js
- このサイトから直接 Kamimi に連絡できるようにフォームを作成すること(Google フォーム導入したい)
