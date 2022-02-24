
 import {

    useInfiniteQuery
  } from "react-query";
  import useIntersectionObserver from '../hooks/use-intersection-observer';
  import { useRef } from "react";
  import { fetchPokemon } from "./api";

  import Box from '@material-ui/core/Box';

import React,{Fragment} from "react";
import { Modal } from "@material-ui/core";
import Pokemon from "./pokemon";
function PokemonList(){

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
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4
      };
    
    return (
      <>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <>
            <section className="flex-container" >
                {data?.pages.map((group,id:number) =><>
                <Fragment key={id}>{
                   group.response.map((pokemon: {name: string; url: string }) =>
                  <>
                   <div  className="card" >
                    <main className="card__body" >
                      <p>#{id} :</p>
                      <br />
                      <p className="name" key={pokemon.name} onClick={handleOpen}>{pokemon.name}</p>
                      
                      <Pokemon url={pokemon.url} id={id} />
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="Details"
                        aria-describedby="modal-modal-description">
                        <Box sx={style}>
                             <Pokemon url={pokemon.url} id={id} /> 
                        </Box>
                    </Modal> 
                    </main>                
                  </div>               
                  </>)}
                      </Fragment></>
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
      </>
    );
  }
export default PokemonList;
