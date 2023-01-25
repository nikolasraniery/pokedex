import React from 'react';
import styled from 'styled-components';

interface PokedexCardProps {
    
}

const Card = styled.section`
  padding: 4em;
  border-radius: 1.8em;
  background: papayawhip;
  `;

export const PokedexCard: React.FC<PokedexCardProps> = () => {
    return (
        <div>
            <>
                <Card>
                Opa
                </Card>
            </>
        </div>
    );
};

export default PokedexCard;