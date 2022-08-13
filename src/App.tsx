import { CharacterFilterProvider } from './contexts/character-filter-context';
import Characters from './pages/Characters';

export default function App() {
    return <CharacterFilterProvider>
        <Characters />
    </CharacterFilterProvider>;
}
