import { useInfiniteQuery } from "react-query";
import { fetchPokemon } from "./api";

const getpokemons = ()=> {
    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useInfiniteQuery("pokemons", fetchPokemon, {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      });
      return { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage }
    }
export default getpokemons;