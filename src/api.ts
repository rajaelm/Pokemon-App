
const fetchPokemon = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
}) => {
  const request = await fetch(pageParam);
  const { results, next } = await request.json();
  return { response: results, nextPage: next };
};

const fetchStats = async (pageParam: string) => {
  const res = await fetch(pageParam);
  return res.json();
}
export { fetchPokemon,fetchStats}