import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery
} from "react-query";

import PokemonList from "./components/PokemonList"



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


