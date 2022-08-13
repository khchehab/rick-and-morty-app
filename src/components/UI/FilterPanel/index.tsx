import { useContext, SyntheticEvent, MouseEvent } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CharacterFilterContextType, StatusOptions } from '../../../types/character';
import CharacterFilterContext from '../../../contexts/character-filter-context';

export default function FilterPanel() {
    const filterContext = useContext<CharacterFilterContextType>(CharacterFilterContext);

    const accordionChangeHandler = (filterId: string) =>
        (event: SyntheticEvent, expanded: boolean) =>
            filterContext.setExpanded(expanded ? filterId : '');

    const statusButtonClick = (status: 'alive' | 'dead' | 'unknown' | '') =>
        (e: MouseEvent<HTMLButtonElement>) =>
            filterContext.setStatus(filterContext.status === status ? '' : status);

    return (<div style={{
        textAlign: 'center',
        margin: '0 20px'
    }}>
        <Typography variant='h5' sx={{
            fontWeight: 400
        }}>Filters</Typography>
        <Link onClick={filterContext.clearFilter} sx={{
            cursor: 'pointer'
        }}>Clear Filters</Link>
        <div style={{
            marginTop: '20px'
        }}>
            <Accordion square={true} expanded={filterContext.expanded === 'status'} onChange={accordionChangeHandler('status')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                    color: '#0c63e4'
                }} />} sx={{
                    backgroundColor: '#e7f1ff',
                    color: '#0c63e4'
                }}>
                    <Typography>Status</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {StatusOptions.map((status) =>
                        <Button key={status.value} variant={filterContext.status === status.value ? 'contained' : 'outlined'} sx={{
                            margin: '0 5px'
                        }} onClick={statusButtonClick(status.value)}>{status.display}</Button>)}
                </AccordionDetails>
            </Accordion>
        </div>
    </div>);
}
