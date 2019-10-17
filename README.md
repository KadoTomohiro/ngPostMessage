# NgPostMessage

```shell script
$ git clone <this repo url>
$ cd ngPostMessage
$ npm install
$ npm start
```

メインアプリが`http://localhost:4200`, サブアプリが`http://localhost:4201`で起動する。

1. [MainApp](http://localhost:4200).を開く
2. `Open SubApp`を押すと、別タブでサブアプリが開く。URLが`http://localhost:4201/`であることを確認。
3. サブアプリのテクストボックスに適当な値を入力し、`Post`ボタンをクリック。
4. メイン画面に入力値が送信されていることを確認する。

実装は
* 送信側: projects/src/app/app.component.ts
* 受信側: src/app/app.component.ts
