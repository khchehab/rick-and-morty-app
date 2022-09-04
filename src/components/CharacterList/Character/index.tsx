import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CharacterContextType, CharacterType } from '../../../types/character';
import CharacterContext from '../../../contexts/character-context';

export default function Character({ character }: { character: CharacterType; }) {
    if (!character) {
        return <p>Character could not be loaded!</p>;
    }

    const width = 300;
    const statusColor = character.status === 'Alive' ? 'success' : character.status === 'Dead' ? 'error' : 'warning';
    const statusBadgeRight = character.status === 'unknown' ? '50px' : '35px';

    const { openDetailModalHandler } = useContext<CharacterContextType>(CharacterContext);

    return (<Badge badgeContent={character.status} color={statusColor} sx={{
        '& .MuiBadge-badge': {
            right: statusBadgeRight,
            top: '20px',
            fontWeight: '400',
            fontSize: '1rem',
            letterSpacing: '0.05rem',
            padding: '0.8rem 0.7rem',
            borderRadius: '5px'
        }
    }}>
        <CardActionArea onClick={openDetailModalHandler}>
            <Card square sx={{ maxWidth: width }}>
                <CardMedia component='img' height={width} image={character.image} alt={character.name} />
                <CardContent>
                    <Typography variant='h5' align='left' gutterBottom sx={{
                        fontSize: '1.2rem'
                    }}>{character.name} 23456</Typography>
                    <Typography variant='body2' align='left' sx={{
                        fontWeight: '300',
                        fontSize: '1rem'
                    }}>Last Location</Typography>
                    <Typography variant='h6' align='left' sx={{
                        fontWeight: '400',
                        fontSize: '1rem'
                    }}>{character.location.name}</Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    </Badge>);
}
