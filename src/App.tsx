import { CharacterFilterProvider } from './contexts/character-filter-context';
import Characters from './pages/Characters';

export default function App() {
    return <CharacterFilterProvider>
        <Characters />
        {/* characters: use accordions
         locations: use modal window with filter under the search bar
         episodes: */}
    </CharacterFilterProvider>;
}
