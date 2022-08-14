import { useState } from 'react';
import Characters from './pages/Characters';
import NavigationBar from './components/UI/NavigationBar';
import { CharacterFilterProvider } from './contexts/character-filter-context';

export default function App() {
    const [ currentPage, setCurrentPage ] = useState<string>('characters');

    const links = [ {
        id: 'characters',
        href: '/',
        content: 'Characters'
    }, {
        id: 'episodes',
        href: '/',
        content: 'Episodes'
    }, {
        id: 'locations',
        href: '/',
        content: 'Locations'
    } ];

    function navigationLinkHandler(link: string) {
        setCurrentPage(link);
    }

    return (<>
        <NavigationBar navigationLinks={links} currentPage={currentPage} onNavigationLinkClick={navigationLinkHandler} />
        <CharacterFilterProvider>
            <Characters />
        </CharacterFilterProvider>
    </>);
}
