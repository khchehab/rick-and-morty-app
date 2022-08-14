import { useEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Title from '../../components/UI/Title';
import CharacterList from '../../components/CharacterList';
import SearchBar from '../../components/UI/SearchBar';
import FilterPanel from '../../components/UI/FilterPanel';
import { CharacterContextType } from '../../types/character';
import { getCharacters } from '../../util/api';
import CharacterContext from '../../contexts/character-context';

export default function Characters() {
    const context = useContext<CharacterContextType>(CharacterContext);
    const { characters, page, totalPages, name, status, species, type, gender } = context;

    useEffect(function() {
        async function fetchCharacters() {
            const characterResponse = await getCharacters(page, name, status, species, type, gender);
            context.setCharacters(characterResponse.results);
            context.setTotalPages(characterResponse.info.pages);
        }

        fetchCharacters();
    }, [ page, name, status, species, type, gender ]);

    return (<>
        <Title>Characters</Title>
        <SearchBar value={name} onChange={context.nameChange} />
        <Grid container spacing={2}>
            <Grid item md={3}>
                <FilterPanel />
            </Grid>
            <Grid item md={9}>
                <CharacterList characters={characters} />
            </Grid>
        </Grid>
        <Pagination count={totalPages} page={page} onChange={context.pageChange} size='large' sx={{
            margin: '20px 0',
            '& .MuiPagination-ul': {
                justifyContent: 'center'
            }
        }} />
    </>);
}
