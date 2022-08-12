import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function NavigationBar({ currentPage }: { currentPage: string; }) {
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

    return <AppBar position='static' sx={{
        color: '#000000',
        backgroundColor: '#f6f6f6',
        marginBottom: '20px',
        boxShadow: 'none'
    }}>
        <Toolbar>
            <Typography sx={{
                fontSize: '1.6rem',
                letterSpacing: '0.1rem',
                marginLeft: '1.3rem'
            }}>Rick & Morty</Typography>
            &nbsp;&nbsp;
            <Typography sx={{
                fontSize: '1.6rem',
                letterSpacing: '0.1rem',
                color: '#3f82ef',
                flexGrow: 1
            }}>WiKi</Typography>

            {links.map((link) => <Link key={link.id}
                                            href={currentPage === link.id ? undefined : link.href}
                                            underline={currentPage === link.id ? 'always' : 'none'}
                                            sx={{
                fontSize: '1.6rem',
                marginRight: '1.3rem',
                cursor: 'pointer'
            }}>
                {link.content}
            </Link>)}
        </Toolbar>
    </AppBar>;
}
