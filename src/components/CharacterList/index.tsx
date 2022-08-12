import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Character from './Character';
import { CharacterType } from '../../types/character';

export default function CharacterList({ characters }: { characters: CharacterType[]; }) {
    if (!characters || characters.length < 1) {
        return <Typography sx={{
            textAlign: 'center'
        }}>No characters found!</Typography>;
    }

    return (<Grid container spacing={2} alignItems='center' justifyContent='flex-start'>
        {characters.map((character) => <Grid item key={character.id}>
            <Character character={character} />
        </Grid>)}
    </Grid>);
}
