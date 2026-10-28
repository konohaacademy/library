// PDFライブラリのサービスワーカー（2026-10-23）。ホーム画面に追加してアプリとして開けるようにするためだけに置く。
//  ⚠ ページのキャッシュはしない。一覧は毎回 GAS から取り、index.html も GitHub Pages から取り直す
//    （ここでしまうと、直した画面が生徒の端末に届かなくなる。まなびのテラスの入口 manabi/sw.js と同じ考え）。
'use strict';
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
