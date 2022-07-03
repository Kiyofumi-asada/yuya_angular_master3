//NOTE: 型はclassではなくtypeを使う。Typeの命名はT〇〇にする

//初期データ
export const initialPokemonData: TPokemon = {
  no: '',
  name: '',
  type: '',
  feature: '',
};

//pokemonの型
export type TPokemon = {
  no: string;
  name: string;
  type: string;
  feature: string;
};

//TPokemonを配列で使う場合の型
export type TPokemonArray = Array<TPokemon>;

//一覧データ受取
export type TResPokemonList = {
  data: TPokemon[] | [];
};

//詳細データ受取
export type TResPokemon = {
  data: TPokemon;
};
