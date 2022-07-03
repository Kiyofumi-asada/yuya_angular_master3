const express = require('express');
const app = express();

const mockData = [
  {
    no: '001',
    name: 'フシギバナ',
    type: 'タイプ:くさ・どく',
    feature: '特性：しんりょく',
  },
  {
    no: '002',
    name: 'リザードン',
    type: 'タイプ：ほのお・ひこう',
    feature: '特性：もうか',
  },
  {
    no: '003',
    name: 'カメックス',
    type: 'タイプ：みず',
    feature: '特性：げきりゅう',
  },
  {
    no: '004',
    name: 'ピカチュウ',
    type: 'タイプ：でんき',
    feature: '特性：せいでんき',
  },
  {
    no: '005',
    name: 'カビゴン',
    type: 'タイプ：ノーマル',
    feature: '特性：あついしぼう',
  },
];

const path = '/pokemon';

/**
 * api GET 一覧 /pokemon
 * @returns ポケモンデータ一覧
 */
app.get(path, function (req, res, next) {
  const data = mockData;
  res.json({ data });
});

/**
 * api GET 詳細 /pokemon/
 * @returns ポケモンデータ1件返却
 */
app.get(`${path}/:no`, function (req, res, next) {
  const { no } = req.params;
  const data = mockData.find((data) => data.no === no);
  console.log('===called getDetailListAPI=== :', no);
  res.json({ data });
});

app.listen(3000);
