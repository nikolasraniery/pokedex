import React, { useEffect, useState } from 'react';
import { PokemonDetail } from './Interfaces/PokemonDetail';
import { getPokemonDetails } from './services/getPokemonDetails';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import { Box, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';

interface PokemonDetailsProps {
    
}

interface PokemonQueryParams{
  name: string;
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    const { name } = useParams<PokemonQueryParams>();
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);
    
    useEffect(() => {
        if (!name) return;

        getPokemonDetails(name)
        .then((response) => setSelectedPokemonDetails(response))

    }, [name]);

    return (
        <div>
            

            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                {name}
                </Typography>
             </Toolbar>
            </AppBar>

            <Container style={{marginTop:'20px'}} maxWidth="lg">
            Pokemon Selecionado: {name}
                    
                    <img src={selectedPokemonDetails?.sprites.front_default} alt="" />

                     {/* { <h2>Pokemon Selecionado: {selectedPokemon?.name || "Nenhum Pokemon Selecionado"}</h2> } */}
                    {JSON.stringify(selectedPokemonDetails?.sprites.front_default, undefined, 2)}
            
            </Container>
        </div>
    );
};

export default PokemonDetails;