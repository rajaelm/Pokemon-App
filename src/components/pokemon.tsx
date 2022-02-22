import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { styled, Box } from '@mui/system';
import { fetchStats } from '../api';
import { Modal } from '@material-ui/core';

interface PkmnStats {
	spriteUrl: string;
	name: string;

}

const formatStats = (data: any): PkmnStats => {
	return {
		spriteUrl: data.results.url,
		name: data.results.name,
	
	};
};

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
interface Props {
	url: string;
}

const Pokemon: FC<Props> = ( pageParam ) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);


	const { data, isLoading, isError } = useQuery(['pokemon', pageParam], ({pageParam})=> fetchStats(pageParam) ,{
		staleTime: Infinity
	})

	if (isLoading) return <p>Loading</p>;
	if (isError) return <p>Error</p>;

	const stats = formatStats(data);

	return (
		<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
			<img
				className="sprite"
				src={stats.spriteUrl}
				alt={`${stats.name}`}
				/>
          <div>
		  <p className="name">{stats.name}</p>
          </div>
        </Box>
      </Modal>
	/* 	<section className="card">
			<header className="card__header">
				<img
					className="sprite"
					src={stats.spriteUrl}
					alt={`${stats.name}`}
				/>
			</header>
			<main className="card__body">
				
				<p className="name">{stats.name}</p>
				
			</main>
		</section> */
	);
};

export default Pokemon;
