const express = require('express');
const app = express();

const mockData = [
  {
    no: '001',
    name: 'フシギバナ',
    type: 'くさ・どく',
    feature: 'しんりょく',
  },
  {
    no: '002',
    name: 'リザードン',
    type: 'ほのお・ひこう',
    feature: 'もうか',
  },
  {
    no: '003',
    name: 'カメックス',
    type: 'みず',
    feature: 'げきりゅう',
  },
  {
    no: '004',
    name: 'ピカチュウ',
    type: 'でんき',
    feature: 'せいでんき',
  },
  {
    no: '005',
    name: 'カビゴン',
    type: 'ノーマル',
    feature: 'あついしぼう',
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
