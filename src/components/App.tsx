import {
	QueryClient,
	QueryClientProvider
  } from "react-query";
import Header from "./header";
import PokemonList from "./pokemonList";

  const queryClient = new QueryClient();
  
  function App() {
	
	return (
	  <QueryClientProvider client={queryClient}>
		
		<div className="App">
			<Header/>
		  <PokemonList />
		</div>
	  </QueryClientProvider>
	);
  }
  
  
  
  export default App;
  
  
  