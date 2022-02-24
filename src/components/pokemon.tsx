
import axios from "axios";
import { FC } from "react";
import { useQuery } from "react-query";


interface PkmnStats {
	spriteUrl: string;
	name: string;
	baseattack: number;
	
	

}

const formatStats = (data: any): PkmnStats => {
	
		
	return {
		name: data.data.name,
		spriteUrl: data.data.sprites.front_default,
		baseattack:data.data.sprites.stats,
	
        }
};

interface Props {
	url: string;
	id : number;
}

const Pokemon: FC<Props> = ( {url,id}) => {
	
	//const { data, isLoading, isError } = useQuery(['pokemon',url], fetchStats,{
	const { data, isLoading, isError } = useQuery('pokemon', ()=>{
		id++;
		id =3;
		url = 'https://pokeapi.co/api/v2/pokemon/'+ id;
		console.log(url);
		return axios.get(url)
	})

	if (isLoading) return <p>Loading</p>;
	if (isError) return <p>Error</p>;

	const stats = formatStats(data);
	

	return (
		<>
		
		{ <img
				className="sprite"
				src={stats.spriteUrl}
				alt={`${stats.name}`}
				/> }
          <div>
		  {/* <p className="name">{stats.name}</p> */}
		  
          </div>
		</>
	);
};

export default Pokemon;

