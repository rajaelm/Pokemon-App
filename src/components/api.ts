import axios from "axios";

const fetchPokemon = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1"
}) => {
  const request = await fetch(pageParam);
  const { results, next } = await request.json();
  return { response: results, nextPage: next };
  
};


const fetchStats= async (pageParam: any) => {
 
  const results = await axios.get(pageParam);
 
 
  return { response: results };
  
};

const getImage= async (id:number) => {
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const results = await axios.get(url);
 
 
  return { response: results.data.sprites.front_default };
  
};
/* const fetchStats =  (pageParam: any) => {
  const res = axios.get(pageParam);
 

  return res;
} */
export { fetchPokemon,fetchStats,getImage}