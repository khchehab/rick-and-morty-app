import Grid from '@mui/material/Grid';
import Character from './Character';
import { CharacterType } from './types';

export default function CharacterList({ characters }: { characters: CharacterType[] }) {
    return (<Grid container spacing={2} alignItems='center' justifyContent='center'>
        {characters.map((character) => <Grid item key={character.id}>
            <Character character={character} />
        </Grid>)}
    </Grid>);
}
