//NOTE: 型はclassではなくtypeを使う。Typeの命名はT〇〇にする

//pokemonの型
export type TPokemon = {
  id: string;
  name: string;
  type: string;
  feature: string;
};

//TPokemonを配列で使う場合の型
export type TPokemonArray = Array<TPokemon>;

//データ受取用

export type TResPokemon = {
  data: { id: string; name: string; type: string; feature: string }[] | [];
};
