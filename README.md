# 実行コマンド

## rails
```
rails g model Article title:string description:string good:text  bad:text

rails g controller api/v1/articles
```

## NEXT
```
# yarnでnextを作成
yarn create next-appfront --typescript
# 立ち上げ
yarn next dev

yarn add axios

yarn add -D @types/axios
```

# 参考文献

nextの初期セットアップを参考にする  
https://zenn.dev/hisho/books/617d8f9d6bd78b/viewer/chapter1#format%E3%81%A8lint%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%97%E3%82%88%E3%81%86

こちらで、基本的なrailsとreactのaxiosでの通信の部分を参考にする
[Rails API × React × TypeScriptで作るシンプルなTodoアプリ]  
https://qiita.com/kazama1209/items/5c07d9a65ef07a02a4f5

nextで基本的なルーティングのやり方はこれを参考にする  
https://reffect.co.jp/react/next-js#i-3