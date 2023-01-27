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
import lightGreen from '@material-ui/core/colors/lightGreen';
import { display } from '@mui/system';

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
        <div style={{backgroundColor:'lightGreen'}}>
            

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
           
                    <Box>
                      <img width='100%' height='auto' src={selectedPokemonDetails?.sprites.front_default} alt="" />
                    </Box>
                    <Box>
                      <Typography variant='h2' style={{marginBottom: "10px"}}>
                        {selectedPokemonDetails?.name}
                      </Typography >
                        {selectedPokemonDetails?.types.map((type) => <Typography>{type.type.name}</Typography>)}
                    </Box>

                    <Box  style={{display: 'flex'}}>

                    <Typography style={{marginRight: "5px"}}>
                      Espécie:
                    </Typography>
                    <Typography>
                      {selectedPokemonDetails?.species.name}
                    </Typography>

                    </Box>
                      

                    
                    <Box style={{display: 'flex'}}>
                    <Typography style={{marginRight: "5px"}}>
                      Altura:
                    </Typography>
                    <Typography>
                    {selectedPokemonDetails?.height}
                    </Typography>
                    </Box>

                    <Box style={{display: 'flex'}}>
                      <Typography style={{marginRight: "5px"}}>
                        Peso:
                      </Typography>
                      <Typography>
                        {selectedPokemonDetails?.weight}
                      </Typography>
                    </Box>
                    
                    <Box style={{display: 'flex'}}>
                      <Typography style={{marginRight: "5px"}}>
                        Habilidades:
                      </Typography>
                      <Typography>
                        {selectedPokemonDetails?.abilities.map((ability) => <Typography /*style={{marginRight: "5px"}}*/>{ability.ability.name}</Typography>)}
                      </Typography>
                    </Box>
                    
                    
            </Container>
        </div>
    );
};

export default PokemonDetails;