import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { CharacterProvider } from './contexts/character-context';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import PageNotFound from './pages/PageNotFound';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<CharacterProvider>
                    <Characters />
                </CharacterProvider>} />
                <Route path='episodes' element={<Episodes />} />
                <Route path='locations' element={<Locations />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
</React.StrictMode>);
