import React, { FC } from 'react';
import { useQuery } from 'react-query';

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

interface Props {
	url: string;
}
const url = "https://pokeapi.co/api/v2/pokemon"
const Pokemon: FC<Props> = ( pageParam ) => {

const fetchStats = async (url: string) => {
	const res = await fetch(url);
	return res.json();
  }
	const { data, isLoading, isError } = useQuery(['pokemon', pageParam], ({pageParam=url})=> fetchStats(pageParam) ,{
		staleTime: Infinity
	})

	if (isLoading) return <p>Loading</p>;
	if (isError) return <p>Error</p>;

	const stats = formatStats(data);

	return (
		<section className="card">
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
		</section>
	);
};

export default Pokemon;
