import { useEffect, useState, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import NavigationBar from '../../components/UI/NavigationBar';
import Title from '../../components/UI/Title';
import CharacterList from '../../components/CharacterList';
import SearchBar from '../../components/UI/SearchBar';
import FilterPanel from '../../components/UI/FilterPanel';
import { CharacterType } from '../../types/character';
import { getCharacters } from '../../util/api';

export default function Characters() {
    // TODO Switch the below from state variables to a context
    const [ characters, setCharacters ] = useState<CharacterType[]>([]);
    const [ page, setPage ] = useState<number>(1);
    const [ totalPages, setTotalPages ] = useState<number>(1);
    const [ nameFilter, setNameFilter ] = useState<string>('');
    const [ statusFilter, setStatusFilter ] = useState<'alive' | 'dead' | 'unknown' | ''>('');
    const [ speciesFilter, setSpeciesFilter ] = useState<string>('');
    const [ typeFilter, setTypeFilter ] = useState<string>('');
    const [ genderFilter, setGenderFilter ] = useState<'male' | 'female' | 'genderless' | 'unknown' | ''>('');
    const [ expandedFilter, setExpandedFilter ] = useState<string>('');

    useEffect(function() {
        async function fetchCharacters() {
            const characterResponse = await getCharacters(page, nameFilter, statusFilter, speciesFilter, typeFilter, genderFilter);
            setCharacters(characterResponse.results);
            setTotalPages(characterResponse.info.pages);
        }

        fetchCharacters();
    }, [ page, nameFilter, statusFilter, speciesFilter, typeFilter, genderFilter ]);

    function nameFilterChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setNameFilter(e.target.value);
        setPage(1);
    }

    function pageChangeHandler(e: ChangeEvent<unknown>, page: number) {
        setPage(page);
    }

    function clearFilterLinkHandler() {
        setStatusFilter('');
        setSpeciesFilter('');
        setTypeFilter('');
        setGenderFilter('');
    }

    return (<>
        <NavigationBar currentPage='characters' />
        <Title>Characters</Title>
        <SearchBar value={nameFilter} onChange={nameFilterChangeHandler} />
        <Grid container spacing={2}>
            <Grid item md={3}>
                <FilterPanel expandedFilter={expandedFilter}
                             expandedFilterSetter={setExpandedFilter}
                             onClearFilter={clearFilterLinkHandler} />
            </Grid>
            <Grid item md={9}>
                <CharacterList characters={characters} />
            </Grid>
        </Grid>
        <Pagination count={totalPages} page={page} onChange={pageChangeHandler} size='large' sx={{
            margin: '20px 0',
            '& .MuiPagination-ul': {
                justifyContent: 'center'
            }
        }} />
    </>);
}
