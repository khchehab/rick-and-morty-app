import { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import NavigationBar from '../../components/UI/NavigationBar';
import Title from '../../components/UI/Title';
import CharacterList from '../../components/CharacterList';
import SearchBar from '../../components/UI/SearchBar';
import FilterPanel from '../../components/UI/FilterPanel';
import { CharacterFilterContextType, CharacterType } from '../../types/character';
import { getCharacters } from '../../util/api';
import CharacterFilterContext from '../../contexts/character-filter-context';

export default function Characters() {
    const [ characters, setCharacters ] = useState<CharacterType[]>([]);

    const filterContext = useContext<CharacterFilterContextType>(CharacterFilterContext);
    const { page, totalPages, name, status, species, type, gender } = filterContext;

    useEffect(function() {
        async function fetchCharacters() {
            const characterResponse = await getCharacters(page, name, status, species, type, gender);
            setCharacters(characterResponse.results);
            filterContext.setTotalPages(characterResponse.info.pages);
        }

        fetchCharacters();
    }, [ page, name, status, species, type, gender ]);

    return (<>
        <Title>Characters</Title>
        <SearchBar value={name} onChange={filterContext.nameChange} />
        <Grid container spacing={2}>
            <Grid item md={3}>
                <FilterPanel />
            </Grid>
            <Grid item md={9}>
                <CharacterList characters={characters} />
            </Grid>
        </Grid>
        <Pagination count={totalPages} page={page} onChange={filterContext.pageChange} size='large' sx={{
            margin: '20px 0',
            '& .MuiPagination-ul': {
                justifyContent: 'center'
            }
        }} />
    </>);
}
