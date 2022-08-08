import { useEffect, useState } from 'react';
import NavigationBar from '../../components/UI/NavigationBar';
import Title from '../../components/UI/Title';
import CharacterList from '../../components/CharacterList';

export default function Characters() {
    const [ characters, setCharacters ] = useState([]);

    useEffect(function() {
        async function fetchCharacters() {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const json = await response.json();
            setCharacters(json.results);
        }

        fetchCharacters();
    }, []);

    if (!characters || characters.length < 1) {
        return <p>Characters loading...</p>;
    }

    return (<>
        <NavigationBar currentPage='characters' />
        <Title>Characters</Title>
        <CharacterList characters={characters} />
    </>);
}
