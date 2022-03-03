const mockeddata = {
    data: {
        name: "pokemon",
        "stats":[
          {
             "base_stat":45,
             "effort":0,
             "stat":{
                "name":"hp",
                "url":"https://pokeapi.co/api/v2/stat/1/"
             }
          },
          {
             "base_stat":49,
             "effort":0,
             "stat":{
                "name":"attack",
                "url":"https://pokeapi.co/api/v2/stat/2/"
             }
          },
          {
             "base_stat":49,
             "effort":0,
             "stat":{
                "name":"defense",
                "url":"https://pokeapi.co/api/v2/stat/3/"
             }
          },
          {
             "base_stat":65,
             "effort":1,
             "stat":{
                "name":"special-attack",
                "url":"https://pokeapi.co/api/v2/stat/4/"
             }
          },
          {
             "base_stat":65,
             "effort":0,
             "stat":{
                "name":"special-defense",
                "url":"https://pokeapi.co/api/v2/stat/5/"
             }
          }
        ]
    }
};
const mockednames = {
   "pages":[
           {"response":[
             { "name":"charmander",
              "url":"https://pokeapi.co/api/v2/pokemon/4/"}
             ],
           "nextPage":"https://pokeapi.co/api/v2/pokemon?offset=4&limit=1"},
           {"response":[
             {"name":"charmander",
             "url":"https://pokeapi.co/api/v2/pokemon/4/"}
           ],
          "nextPage":"https://pokeapi.co/api/v2/pokemon?offset=4&limit=1"}
         ]
       }
       export {mockednames, mockeddata}