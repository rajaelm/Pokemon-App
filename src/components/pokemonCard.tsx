import { Box, Modal } from "@material-ui/core";
import React from "react";
import { FC, Fragment, useState } from "react";
import Pokemon from "./pokemon";

interface Props {
  data: any;
}

const PokemonCard: FC<Props> = ({ data }) => {
  const [pokeid, setPokeid] = useState(1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id: number) => {
    setPokeid(id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    borderRadius: "10%",
    p: 4,
  };
  return (
    <>
      <section className="flex-container">
     
        {data?.pages?.map(
          (
            group: { response: { name: string; url: string }[] },
            id: number
          ) => (
            <>
              <Fragment key={id}>
                {group.response.map(
                  (pokemon: { name: string; url: string }) => (
                    <>
                      <div className="card">
                        <main
                          className="card__body"
                          onClick={() => handleOpen(id)}
                        >
                          <div className="Block">
                            <p>#{id} </p>
                            <br />
                            <p className="name" data-testid="pokename">{pokemon.name}</p>
                          </div>
                        </main>
                      </div>
                    </>
                  )
                )}
              </Fragment>
            </>
          )
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="Details"
          aria-describedby="Pokemon details"
        >
          <Box sx={style}>
            <Pokemon id={pokeid} />
          </Box>
        </Modal>
      </section>
    </>
  );
};
export default PokemonCard;
