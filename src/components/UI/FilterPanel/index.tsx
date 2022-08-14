import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { CharacterContextType } from '../../../types/character';
import CharacterContext from '../../../contexts/character-context';
import FilterAccordion from './FilterAccordion';

export default function FilterPanel() {
    const { clearFilter } = useContext<CharacterContextType>(CharacterContext);

    return (<div style={{
        textAlign: 'center',
        margin: '0 20px'
    }}>
        <Typography variant='h5' sx={{
            fontWeight: 400
        }}>Filters</Typography>
        <Link onClick={clearFilter} sx={{
            cursor: 'pointer'
        }}>Clear Filters</Link>
        <div style={{
            marginTop: '20px'
        }}>
            <FilterAccordion filterId='status' />
            <FilterAccordion filterId='species' />
            <FilterAccordion filterId='gender' />
        </div>
    </div>);
}
