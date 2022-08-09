import { useEffect, useState, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import NavigationBar from '../../components/UI/NavigationBar';
import Title from '../../components/UI/Title';
import CharacterList from '../../components/CharacterList';
import SearchBar from '../../components/UI/SearchBar';
import { CharacterType } from '../../types/character';
import { getCharacters } from '../../util/api';

export default function Characters() {
    const [ characters, setCharacters ] = useState<CharacterType[]>([]);
    const [ page, setPage ] = useState<number>(1);
    const [ totalPages, setTotalPages ] = useState<number>(1);
    const [ nameFilter, setNameFilter ] = useState<string>('');

    useEffect(function() {
        async function fetchCharacters() {
            const characterResponse = await getCharacters(page, nameFilter);
            setCharacters(characterResponse.results);
            setTotalPages(characterResponse.info.pages);
        }

        fetchCharacters();
    }, [ page, nameFilter ]);

    function nameFilterChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setNameFilter(e.target.value);
        setPage(1);
    }

    function pageChangeHandler(e: ChangeEvent<unknown>, page: number) {
        setPage(page);
    }

    return (<>
        <NavigationBar currentPage='characters' />
        <Title>Characters</Title>
        <SearchBar value={nameFilter} onChange={nameFilterChangeHandler} />
        <Grid container spacing={2}>
            <Grid item md={3}>
                <p>filtering</p>
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
