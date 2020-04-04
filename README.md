# kamimi-portfolio

## このサイトについて
* フロントエンドのみのポートフォリオサイト

## デモ(PC用表示のみ)
![PC用ポートフォリオ](image/portfolio_web.png "portfolio_web")

## 実装完了までの手順
1. デザイン検討 (実工数：約4時間)
  * 下記を参考に検討
    * デザイン入門教室(書籍)
    * Pinterestに掲載されているデザイン
    * 実際のエンジニア・デザイナーのポートフォリオ

2. モックアップ作成 (実工数：約4時間)
  * pptxで作成

3. コーディング (実工数：約17時間)

4. Webサイトを公開 (実工数：約2時間)
  * Firebaseで公開
  * 参考：https://dotinstall.com/lessons/hosting_firebase

## 工夫したこと
* グローバルメニュを固定配置し、どのページにいてもすぐ別のコンテンツをみることができる
* レスポンシブ対応を行った
* コンテンツごとの切り口にsvgを用いて波線にした(参考：http://tympanus.net/codrops/2013/10/03/a-collection-of-separator-styles/)
* PCでは、プロダクトのスクリーンショットの上にカーソルを当てると、別コンポーネントが現れる(参考：https://blog.raizzenet.com/mouse-hover-caption-effects-in-css/)
* コンタクトのメールアイコンを押下すると、メールアドレスをクリップボードにコピーすることができる
* メールアドレスをコピーすると、ツールチップを表示する(参考：https://www.jungleocean.com/programming/190308tooltip-css)

## 使用
### 言語
* HTML
* CSS
* JavaScript

### ライブラリ・フレームワーク
* Bootstrap
* jQuery
* Fontawesome

### ツール
* Visual Studio Code

### 改善できること(および反省)
* htmlファイルとcssファイルが一つのみで、肥大化している
  * ejsを導入し、ファイルを分割する
* 英語対応を行う
  * Nust.jsのライブラリ(vue-i18n)を導入する
* スマホでのスムーススクロールを実現すること(Webでは対応済み)
  * `-webkit-overflow-scrolling`で実装可能とのことでやってみたが、適用されなかった
  * また上記のプロパティは、MDNのサイトによると非標準のため、できれば別方法を試したい
  * 参考：https://developer.mozilla.org/ja/docs/Web/CSS/-webkit-overflow-scrolling
* Bootstrapのデフォルトのスタイルを打ち消すため、HTMLファイル内でスタイルを使用しているので、それをやめたい。
  * CSSファイルにスタイルを記載したが、適用されなかったため、止む無くHTMLファイルのタグ内に記載した
* 元々、Viewフォルダの中にhtmlを格納していたが、Firebaseでデプロイする際に、public直下にindex.htmlが必要とのことだったので、フォルダ構成・ファイル名を変更したのだが、本当は自分の好みのフォルダ構成でデプロイできるようにしたい
* 当初、モックアップが全くない状態で作り始めたのだが、細かいデザインや挙動などをどうするかを考えながらコーディングをしていると手戻りが発生したりして効率が悪かった
  * 最初から簡単にでもモックアップを作成してからコーディングを始めた方がよかった(今回は途中からモックアップ作成を行なった)

### 今後導入してみたいこと
* Vue.js
* このサイトから直接Kamimiに連絡できるようにフォームを作成すること(Googleフォーム導入したい)