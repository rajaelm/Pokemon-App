import axios from "axios";
import { useQuery } from "react-query";
const url = "https://pokeapi.co/api/v2/pokemon/";
const getpokedetails = (id : number)=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isLoading, isError } = useQuery("pokemon", () => {
        id++;
        //id =3;
        
        return axios.get(url+id);
      });
      return{ data, isLoading, isError}
    }
export default getpokedetails;