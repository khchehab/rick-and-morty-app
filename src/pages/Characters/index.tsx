import { useEffect, useState, ChangeEvent } from 'react';
import NavigationBar from '../../components/UI/NavigationBar';
import Title from '../../components/UI/Title';
import CharacterList from '../../components/CharacterList';
import SearchBar from '../../components/UI/SearchBar';
import { CharacterType } from '../../types/character';
import { getCharacters } from '../../util/api';

export default function Characters() {
    const [ characters, setCharacters ] = useState<CharacterType[]>([]);
    const [ page, setPage ] = useState<number>(1);
    const [ nameFilter, setNameFilter ] = useState<string>('');

    useEffect(function() {
        async function fetchCharacters() {
            const characterResponse = await getCharacters(page, nameFilter);
            setCharacters(characterResponse.results);
        }

        fetchCharacters();
    }, [ page, nameFilter ]);

    function nameFilterChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setNameFilter(e.target.value);
    }

    return (<>
        <NavigationBar currentPage='characters' />
        <Title>Characters</Title>
        <SearchBar value={nameFilter} onChange={nameFilterChangeHandler} />
        <CharacterList characters={characters} />
    </>);
}
