const express = require('express');
const app = express();

const data = [
  {
    id: '001',
    name: 'フシギバナ',
    type: 'タイプ:くさ・どく',
    feature: '特性：しんりょく',
  },
  {
    id: '002',
    name: 'リザードン',
    type: 'タイプ：ほのお・ひこう',
    feature: '特性：もうか',
  },
  {
    id: '003',
    name: 'カメックス',
    type: 'タイプ：みず',
    feature: '特性：げきりゅう',
  },
  {
    id: '004',
    name: 'ピカチュウ',
    type: 'タイプ：でんき',
    feature: '特性：せいでんき',
  },
  {
    id: '005',
    name: 'カビゴン',
    type: 'タイプ：ノーマル',
    feature: '特性：あついしぼう',
  },
];

const path = '/pokemon';

app.get(path, function (req, res, next) {
  res.json({ status: 200, data });
});

app.listen(3000);
