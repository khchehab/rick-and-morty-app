import Badge from '@mui/material/Badge';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CharacterType } from '../types';

export default function Character({ character }: { character: CharacterType }) {
    if (!character) {
        return <p>Character could not be loaded!</p>;
    }

    const width = 330;
    const statusColor = character.status === 'Alive' ? 'success' : character.status === 'Dead' ? 'error' : 'warning';
    const statusBadgeRight = character.status === 'unknown' ? '50px' : '35px';

    // TODO convert the below Badge component to a styled component (using emotion)
    return (<Badge badgeContent={character.status} color={statusColor} sx={{
        '& .MuiBadge-badge': {
            right: statusBadgeRight,
            top: '25px',
            fontWeight: '400',
            fontSize: '1rem',
            letterSpacing: '0.05rem',
            padding: '0.8rem 0.7rem',
            borderRadius: '5px'
        }
    }}>
        <CardActionArea> {/* TODO should add a link here to the details of a character */}
            <Card square sx={{ maxWidth: width }}>
                <CardMedia component='img' height={width} image={character.image} alt={character.name} />
                <CardContent>
                    <Typography variant='h5' align='left' gutterBottom>{character.name}</Typography>
                    <Typography variant='body2' align='left' sx={{
                        fontWeight: '300',
                        fontSize: '1rem'
                    }}>Last Location</Typography>
                    <Typography variant='h6' align='left' sx={{ fontWeight: '400' }}>{character.location.name}</Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    </Badge>);
}
