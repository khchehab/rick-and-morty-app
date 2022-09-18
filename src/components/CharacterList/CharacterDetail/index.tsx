import { useContext } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { CharacterContextType } from '../../../types/character';
import CharacterContext from '../../../contexts/character-context';

function Information({
    label,
    value
}: {
    label: string;
    value: string;
}) {
    return <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5px'
    }}>
        <Typography sx={{
            display: 'inline-block',
            fontWeight: '500',
            textAlign: 'right',
            width: '100%'
        }}>{label}:</Typography>
        <Typography sx={{
            display: 'inline-block',
            textAlign: 'left',
            width: '100%',
            marginLeft: '5px'
        }}>{value}</Typography>
    </div>;
}

export default function CharacterDetail() {
    const { detailIndex: index, characters } = useContext<CharacterContextType>(CharacterContext);
    const character = characters[index];

    return <Container fixed sx={{
        backgroundColor: 'white',
        // width: '40%',
        marginTop: '5%',
        padding: '1% 0',
        overflow: 'scroll',
        borderRadius: '20px',
        boxShadow: '3px 6px 10px #544949'
    }}>
        <img src={character.image} alt={character.name} style={{
            display: 'block',
            margin: '0 auto',
            paddingTop: '5px'
        }} />
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignContent: 'center',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Information label='Name' value={character.name} />
            <Information label='Status' value={character.status} />
            <Information label='Species' value={`${character.species}${character.type ? ` - ${character.type}` : ''}`} />
            <Information label='Gender' value={character.gender} />
            <Information label='Origin' value={character.origin.name} /> {/* TODO Add link to origin and location */}
            <Information label='Location' value={character.location.name} />
        </div>
    </Container>;
}
