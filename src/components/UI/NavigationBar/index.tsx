import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
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

            <Link to='/'>Characters</Link>
            <Link to='/episodes'>Episodes</Link>
            <Link to='/locations'>Locations</Link>

            {/* {navigationLinks.map((link) => <Link key={link.id} */}
            {/*                                            href={currentPage === link.id ? undefined : link.href} */}
            {/*                                            underline={currentPage === link.id ? 'always' : 'none'} */}
            {/*                                            onClick={() => onNavigationLinkClick(link.id)} */}
            {/*                                            sx={{ */}
            {/*     fontSize: '1.6rem', */}
            {/*     marginRight: '1.3rem', */}
            {/*     cursor: 'pointer' */}
            {/* }}> */}
            {/*     {link.content} */}
            {/* </Link>)} */}
        </Toolbar>
    </AppBar>;
}
