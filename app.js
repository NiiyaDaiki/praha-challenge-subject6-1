const express = require("express");
const app = express();

// port番号
const port = 8080;
// サーバー起動
app.listen(port);

// jsファイルの読み込みに必要。public配下の静的ファイルの読み込み。
app.use("/public", express.static('./public/'));

// ルーティング
app.get("/", (req, res) => {
    res.cookie('6-1', 'value1', {
        httpOnly: true
    });

    res.sendFile(__dirname + '/public/index1.html');
});
