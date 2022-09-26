
import './App.css';
import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 

const App = () => {

    const [pokemon, setPokemon] = React.useState(null); 
    const [pokemonData, setPokemonData] = useState([]);

    const handleChange = (e) => { 
      setPokemon(e.target.value.toLowerCase()); 
    }; 

    const handleSubmit = (e) => { 
      e.preventDefault(); 
      getPokemon(); 
    }; 

    const getPokemon = async () => { 
      const arr = []; 
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; 
      arr.push((await axios.get(url)).data); 
      setPokemonData(arr); 
    }

    return (
      <div className="App" style={{display: 'grid', alignItems: 'center', justifyContent: 'center', height: '50px', }}>
        
        {pokemonData.map((data) => { 
          return (
            <div className = "info" >
            <h1 style={{backgroundColor: "#d9e3f0"}}> {data.name} </h1>
            <img style={{ width:150, height:150 }} src={data.sprites["front_default"]} alt="pokemon_id" />
            <p style={{backgroundColor: "#f47373"}}> Pokedex no. {data.id} </p>
            <p style={{backgroundColor: "#697689"}}> Height: {data.height/10} m</p>
            <p style={{backgroundColor: "#37d67a"}}> Weight: {data.weight/10} kg</p>
            <p style={{backgroundColor: "#ba68c8"}}> Type: {data.types[0].type.name} </p>
            </div>
          )
        })}

        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" onChange = {handleChange} placeholder = "Search Pokemon" />
          </label>
        </form>


      </div>

    ); 

  }; 

export default App;

