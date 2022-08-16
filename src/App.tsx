import NavigationBar from './components/UI/NavigationBar';
import { Outlet } from 'react-router-dom';

export default function App() {
    return (<>
        <NavigationBar />
        <Outlet />
    </>);
}
