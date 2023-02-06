import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PokemonDetail } from '../pokemon/Interfaces/PokemonDetail';
import { getPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { listPokemons, PokemonListInterface } from '../pokemon/services/listPokemons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { serialize } from 'v8';
import { useHistory } from 'react-router-dom';
import PokedexCard from './components/PokedexCard';

interface PokedexProps {

}



export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
    

    useEffect(() => {
        listPokemons().then((response) => setPokemons(response.results))
    }, []);

    

    return (
        <div>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                Pokedex
                </Typography>
             </Toolbar>
            </AppBar>

            <Container style={{marginTop:'20px'}} maxWidth="lg">
            
                    <Grid container spacing={2}>
                    {pokemons.map((pokemon) => (
                        <>
                         <Grid item xs={6}>
                         <PokedexCard pokemon={pokemon}/>
                        </Grid>
                        </>
                    ))}
                       
                    </Grid>
                    
                
            </Container>


           
        </div>
        
    );
};

export default Pokedex;