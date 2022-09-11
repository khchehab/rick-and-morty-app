import { useContext } from 'react';
import { CharacterContextType } from '../../../types/character';
import CharacterContext from '../../../contexts/character-context';

export default function CharacterDetail() {
    const { detailIndex: index } = useContext<CharacterContextType>(CharacterContext);
    return <p>Character detail for character number {index}!</p>;
}
