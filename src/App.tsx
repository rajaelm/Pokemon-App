import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery
} from "react-query";
import useIntersectionObserver from './hooks/use-intersection-observer';
import { useRef } from "react";
import Pokemon from './components/pokemon';
import Modal from 'react-modal';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <h1 className="title">Pokemon App</h1>
      </header>
      <div className="App">
        <PokemonList />
      </div>
    </QueryClientProvider>
  );
}


export default App;

const fetchPokemon = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
}) => {
  const request = await fetch(pageParam);
  const { results, next } = await request.json();
  return { response: results, nextPage: next };
};
 
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


  return (
    <div className="App">
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="flex-container">
            
              {data?.pages.map((group, i) =>
                group.response.map((pokemon: { name: string; url: string }) =>
                
                <>
                 <section className="card">
                  <main className="card__body">
                   
                    <p className="name">{pokemon.name}</p>
                   
                  </main>
                 
                </section>
                </>)
               // <Pokemon key={pokemon.name} url={pokemon.url} /> )
              )}
           
          </div>
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
