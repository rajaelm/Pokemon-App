import { FC } from "react";
import getpokedetails from "./getpokedetails";

import React from 'react';
interface PkmnStats {
  spriteUrl: string;
  name: string;
  HP: [string, string | undefined];
  Attack: [string, string | undefined];
  SpAttack: [string, string | undefined];
  Spdefense: [string, string | undefined];
  speed: [string, string | undefined];
  //baseStats : string;
}

const formatStats = (data: any): PkmnStats => {
  return {
    name: data?.data.name,
    spriteUrl: data?.data.sprites.front_default,
    HP: [data?.data.stats[0].stat.name, data?.data.stats[0].base_stat],
    Attack: [data?.data.stats[1].stat.name, data?.data.stats[1].base_stat],
    SpAttack: [data?.data.stats[2].stat.name, data?.data.stats[2].base_stat],
    Spdefense: [data?.data.stats[3].stat.name, data?.data.stats[3].base_stat],
    speed: [data?.data.stats[4].stat.name, data?.data.stats[4].base_stat],

    //baseStats: data.data.stats[1].base_stat
  };
};
interface Props {
  id: number;
}

const Pokemon: FC<Props> = ({ id }) => {
  //const { data, isLoading, isError } = useQuery(['pokemon',url], fetchStats,{
  const { data, isLoading, isError } = getpokedetails(id);
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  const stats = formatStats(data);

  return (
    <>
      {<img className="sprite" src={stats.spriteUrl} alt={`${stats.name}`} />}

      <div className="statBlock">
        <p className="namecard" data-testid="name">Name :{stats.name}</p>
        <p>
          {stats.HP[0]} :{stats.HP[1]}{" "}
        </p>
        <p>
          {stats.Attack[0]} :{stats.Attack[1]}{" "}
        </p>
        <p>
          {stats.SpAttack[0]} :{stats.SpAttack[1]}{" "}
        </p>
        <p>
          {stats.Spdefense[0]} :{stats.Spdefense[1]}{" "}
        </p>
        <p>
          {stats.speed[0]} :{stats.speed[1]}{" "}
        </p>
      </div>
    </>
  );
};

export default Pokemon;
