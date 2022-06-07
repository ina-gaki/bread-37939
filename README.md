# アプリケーション名
製パン変換ツール

## アプリケーション概要
グラム表記の原料をベーカーズ％表記に変換し、表示します。
同様に、ベーカーズ％表記の原料をグラム表記に変換し、表示します。

## URL
https://bread-37939.herokuapp.com/

## 利用方法
ネットや料理本等でパンのレシピを検索し、レシピに記載されている原料をグラム表記で本アプリケーションに入力します。  
その状態で変換ボタンをクリックすることで、グラム表記からベーカーズ％に変換し、ブラウザ上に表示されます。
同様にベーカーズ％の欄に入力し変換ボタンをクリックすることで、グラム表記に変換された値がブラウザ上に表示されます。

## アプリケーションを作成した背景
近年ではネット上で様々なレシピを検索することができますが、基本的にはグラム表記の物が多い傾向にあります。
パンにはベーカーズ％という独自の表記方法がありますが、一般的なレシピサイトはベーカーズ％で記載されていることは少ないです。
パンを常日頃から作る方はパンのレシピを調べる際にベーカーズ％で知りたいと考えるのですが、その度に自分で計算をするという手間がありました。
そういったベーカーズ％の計算のためのアプリが欲しいと考え、今回作成しようと考えました。

## 洗い出した用件
https://docs.google.com/spreadsheets/d/1HHkv0-jBuv8gpBtf_zparuPaEzTpooBBimy-qpddICA/edit#gid=982722306

[![Image from Gyazo](https://i.gyazo.com/ec0c58787fbe0071666daffed0472f6d.png)](https://gyazo.com/ec0c58787fbe0071666daffed0472f6d)

[![Image from Gyazo](https://i.gyazo.com/07b49705c009f0acf4b2eb62d72e1297.jpg)](https://gyazo.com/07b49705c009f0acf4b2eb62d72e1297)

## データベース設計
[![Image from Gyazo](https://i.gyazo.com/a24daac309e7af16f8387be0bb650bb3.png)](https://gyazo.com/a24daac309e7af16f8387be0bb650bb3)

## reshipsテーブル

| Column                 | Type       | Options                         |
| -----------------------| ---------- | ------------------------------- |
| flour                  | integer    | null: false                     |
| water                  | integer    | null: false                     |
| salt                   | integer    | null: false                     |
| sugar                  | integer    | null: false                     |
| yeast                  | integer    | null: false                     |
| oil                    | integer    | null: false                     |

## reships2テーブル

| Column                 | Type       | Options                         |
| -----------------------| ---------- | ------------------------------- |
| flour_g                | integer    | null: false                     |
| flour2_1               | integer    | null: false                     |
| flour2_2               | integer    | null: false                     |
| water2                 | integer    | null: false                     |
| salt2                  | integer    | null: false                     |
| sugar2                 | integer    | null: false                     |
| yeast2                 | integer    | null: false                     |
| oil2                   | integer    | null: false                     |

## 実装予定の機能
開発環境では問題なく動くのですが、本番環境ではベーカーズ％⇨グラムの計算は最初に行った時にのみ挙動し、また連続で計算できない状態になっています。Javascriptの学習の一環で制作したものなので、学習に励み、原因が理解でき次第対処致します。

## 開発環境
Ruby/Ruby on Rails/MySQL/Github/AWS/Visual Studio Code

## 工夫したポイント
Javascriptの勉強をしたかったことと実装したい機能が計算機能だけだったので、画面遷移は行わず、
入力から計算結果の表示まで一画面で完結するようにしました。