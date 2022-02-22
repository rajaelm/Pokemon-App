
 import {
    QueryClient,
    QueryClientProvider,
    useInfiniteQuery
  } from "react-query";
  import useIntersectionObserver from '../hooks/use-intersection-observer';
  import { useRef } from "react";
  import { fetchPokemon } from "../api";
import Pokemon from "./pokemon";
function PokemonList() {

    const {
      data,
      isLoading,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage
    } = useInfiniteQuery("pokemons", fetchPokemon, {
      getNextPageParam: (lastPage) => lastPage.nextPage
    });
    const loadMoreBtn = useRef<HTMLButtonElement>(null);
    useIntersectionObserver({
          target: loadMoreBtn,
          onIntersect: () => fetchNextPage(),
          enabled: hasNextPage,
      });
  
      const handleOpen = (url:string) =>{
          //
      }
    return (
      <div className="App">
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <>
            <section className="flex-container" >
                {data?.pages.map((group, i) =>
                  group.response.map((pokemon: { name: string; url: string }) =>
                  <>
                   <div  className="card" >
                    <main className="card__body">
                      <p className="name">{pokemon.name}</p>
                    </main>
                  </div>
                                
                
                  </>)
                )} 
            </section>
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
      </div>
    );
  }
  export default PokemonList;