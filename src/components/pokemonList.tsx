import useIntersectionObserver from "../hooks/use-intersection-observer";
import { useRef } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import PokemonCard from "./pokemonCard";
import { Box } from "@material-ui/core";
import getpokemons from "./getpokemons";
function PokemonList() {
  const { data, isLoading, fetchNextPage, hasNextPage } =getpokemons();

  const loadMoreBtn = useRef<HTMLButtonElement>(null);
  useIntersectionObserver({
    target: loadMoreBtn,
    onIntersect: () => fetchNextPage(),
    enabled: hasNextPage,
  });
  
  return (
    <>
      {isLoading ? (
        <p data-testid="loading">loading...</p>
      ) : (
        <>
        <PokemonCard data={data}/>
        {console.log(JSON.stringify(data))};
          <Box style={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress  data-testid="spin" className="load-more"
            ref={loadMoreBtn}
            onClick={() => fetchNextPage()}
            />
          </Box>
        </>
      )}
    </>
  );
}
export default PokemonList;
