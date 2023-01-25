import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { PokemonListInterface } from '../../pokemon/services/listPokemons';

interface PokedexCardProps {
    pokemon: PokemonListInterface;
}

const Card = styled.section`
  padding: 4em;
  border-radius: 1.8em;
  background: papayawhip;
  `;

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
    const history = useHistory();

    
    function handleClick() {
        history.push(`/pokemon/${pokemon.name}`);
    }

    return (
        <div>
            <>
                <Card onClick={handleClick}>
                  {pokemon.name}
                </Card>
            </>
        </div>
    );
};

export default PokedexCard;