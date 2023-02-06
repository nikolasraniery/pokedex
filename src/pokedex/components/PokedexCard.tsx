import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Collapse, IconButton, Typography } from '@material-ui/core';
import { ExpandMore, Favorite, InfoOutlined, InfoRounded, InfoSharp, InfoTwoTone, InsertDriveFileOutlined, MoreVert, Share } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { PokemonDetail } from '../../pokemon/Interfaces/PokemonDetail';
import { PokemonListInterface } from '../../pokemon/services/listPokemons';

interface PokedexCardProps {
    pokemon: PokemonDetail;
}

// const Card = styled.section`
//   padding: 4em;
//   border-radius: 1.8em;
//   background: papayawhip;
//   `;

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const history = useHistory();

    
    function handleClick() {
        history.push(`/pokemon/${pokemon.name}`);
    }

    return (
        <Card onClick={handleClick}>
      <CardMedia
      style={{ height: 0, paddingTop: '50%'}}
        image={pokemon.sprites.front_default}
        title="Paella dish"
      />
      <CardHeader
        title={pokemon.name}
        subheader={pokemon.types.map((type) => (
          <Box mr={1}>
            <Chip label={type.type.name} variant="outlined" />
          </Box>
        ))}
      />
    </Card>
    );
};

export default PokedexCard;