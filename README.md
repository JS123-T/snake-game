# 貪食蛇遊戲

這是一個使用 HTML、CSS 和 JavaScript 製作的簡單貪食蛇遊戲。

## 專案架構

```text
snake-game/
├─ index.html       # 網頁主頁與 Canvas 畫布
├─ style.css        # 網頁外觀與版面配置
├─ tsconfig.json    # TypeScript 設定檔
└─ dist/
   └─ game.js       # 貪食蛇遊戲邏輯
```

## 如何執行

1. 開啟 `index.html`。
2. 使用方向鍵或 `WASD` 控制蛇。
3. 撞牆或撞到自己時遊戲結束。
4. 按 `Enter` 重新開始。

如果瀏覽器直接開啟檔案時無法正常載入，請在 VS Code 使用 Live Server 開啟 `index.html`。

## 遊戲功能

- 蛇會持續移動
- 隨機產生食物
- 吃到食物會增加分數並變長
- 撞牆或撞到自己會結束遊戲
- 支援方向鍵與 `WASD`
- 按 `Enter` 可以重新開始

## Git 開發流程

修改程式後，在專案資料夾執行：

```powershell
git add .
git commit -m "說明這次修改"
git push
```

例如：

```powershell
git add .
git commit -m "改善遊戲畫面"
git push
```

## GitHub 儲存庫

https://github.com/JS123-T/snake-game