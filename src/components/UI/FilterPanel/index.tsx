import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { CharacterFilterContextType } from '../../../types/character';
import CharacterFilterContext from '../../../contexts/character-filter-context';
import FilterAccordion from './FilterAccordion';

export default function FilterPanel() {
    const { clearFilter } = useContext<CharacterFilterContextType>(CharacterFilterContext);

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
            <FilterAccordion filterId='gender' />
        </div>
    </div>);
}
