import { useInfiniteQuery } from "react-query";
import useIntersectionObserver from "../hooks/use-intersection-observer";
import { useRef } from "react";
import { fetchPokemon, getImage } from "./api";

import PokemonCard from "./pokemonCard";
function PokemonList() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery("pokemons", fetchPokemon, {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const loadMoreBtn = useRef<HTMLButtonElement>(null);
  useIntersectionObserver({
    target: loadMoreBtn,
    onIntersect: () => fetchNextPage(),
    enabled: hasNextPage,
  });
  
  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
        <PokemonCard data={data}/>
         
          <button
            className="load-more"
            ref={loadMoreBtn}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </button>
        </>
      )}
    </>
  );
}
export default PokemonList;
