import { Outlet, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/UI/NavigationBar';
import { CharacterProvider } from './contexts/character-context';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import PageNotFound from './pages/PageNotFound';

function RickAndMortyApp() {
    return (<>
        <NavigationBar />
        <Outlet />
    </>);
}

export default function App() {
    return (<Routes>
        <Route path='/' element={<RickAndMortyApp />}>
            <Route index element={<CharacterProvider>
                <Characters />
            </CharacterProvider>} />
            <Route path='episodes' element={<Episodes />} />
            <Route path='locations' element={<Locations />} />
            <Route path='*' element={<PageNotFound />} />
        </Route>
    </Routes>);
}
