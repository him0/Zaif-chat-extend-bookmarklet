# Zaif のチャットを見やすくするブックマークレット

## 使い方

1. <a href="javascript:(function()%7B(function()%7Bvar%20e%3Ddocument.querySelectorAll(%22.transaction-box%22)%3Be.forEach(function(e%2Ct)%7Be.style.display%3D%22block%22%2Ce.style.width%3D%22100%25%22%2C2%3D%3D%3Dt%26%26(e.style.height%3D%22900px%22%2Ce.children%5B1%5D.style.height%3D%22900px%22)%7D)%3Bvar%20t%3Ddocument.querySelector(%22%23cc%20%23cc_area%22)%3Bt.style.minHeight%3D%22700px%22%2Ct.style.maxHeight%3D%22700px%22%2Ct.style.height%3D%22700px%22%7D)()%3B%7D)()">ここ</a> をブックマークする。

2. https://zaif.jp/trade_btc_jpy などで実行する。

3. トレードもちゃんとする。


## ご意見ご要望

issues にお願いします。

PullRequest も受け付けています。


## 開発

```
npm install
```

`bookmarklet.js` を修正する。

```
npm run build
```

`bookmarklet` が生成される。

`bookmarklet` の中身をもとに `README.md` に反映
