// Webサーバーの作成方法を教えてください

// Node.jsのhttpモジュールを読み込む
const http = require('http');

// Webサーバーを実行
const sv = http.createServer(handler);
sv.listen(3000);

// サーバーにアクセスがあった時に実行される関数
function handler(req, res) {
  // ブラウザに表示する内容を指定
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<!DOCTYPE html><html lang="ja">');
  res.write('<head><meta charset="utf-8">');
  res.write('<title>Hello</title></head>');
  res.write('<body><h1>Hello Node.js!</h1>');
  res.write('<p>This is Node.js sample page.</p>');
  res.write('<p>これは、Node.jsのサンプルページです。</p>', 'utf8');
  res.write('</body></html>');
  res.end();
}

// Path: comments.js
// Webサーバーの作成方法を教えてください

// Node.jsのhttpモジュールを読み込む
const http = require('http');

// Webサーバーを実行
const sv = http.createServer(handler);
sv.listen(3000);

// サーバーにアクセスがあった時に実行される関数
function handler(req, res) {
  // ブラウザに表示する内容を指定
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<!DOCTYPE html><html lang="ja">');
  res.write('<head><meta charset="utf-8">');
  res.write('<title>Hello</title></head>');
  res.write('<body><h1>Hello Node.js!</h1>');
  res.write('<p>This is Node.js sample page.</p>');
  res.write('<p>これは、Node.jsのサンプルページです。</p>', 'utf8');
  res.write('</body></html>');
  res.end();
}

// Path: comments.js
// Webサーバーの作成方法を教えてください

// Node.jsのhttpモジュールを読み込む