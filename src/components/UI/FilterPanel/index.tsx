import { MouseEventHandler, SyntheticEvent } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FilterPanel({
    expandedFilter,
    expandedFilterSetter,
    onClearFilter
}: {
    expandedFilter: string;
    expandedFilterSetter: (expandedFilter: string) => void;
    onClearFilter: MouseEventHandler<HTMLAnchorElement>;
}) {
    const accordionChangeHandler = (filterId: string) =>
        (event: SyntheticEvent, expanded: boolean) =>
            expandedFilterSetter(expanded ? filterId : '');

    // TODO First of all, the status values should be in an enum (in Characters page) instead of a mapped type
    //      and the below options should be in a separate file (maybe with the type).
    const statusFilterOptions = [ {
        value: 'alive',
        display: 'Alive'
    }, {
        value: 'dead',
        display: 'Dead'
    }, {
        value: 'unknown',
        display: 'Unknown'
    } ];

    return (<div style={{
        textAlign: 'center',
        margin: '0 20px'
    }}>
        <Typography variant='h5' sx={{
            fontWeight: 400
        }}>Filters</Typography>
        <Link onClick={onClearFilter} sx={{
            cursor: 'pointer'
        }}>Clear Filters</Link>
        <div style={{
            marginTop: '20px'
        }}>
            <Accordion square={true} expanded={expandedFilter === 'status'} onChange={accordionChangeHandler('status')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                    color: '#0c63e4'
                }} />} sx={{
                    backgroundColor: '#e7f1ff',
                    color: '#0c63e4'
                }}>
                    <Typography>Status</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {statusFilterOptions.map((status) =>
                        <Button key={status.value} variant={'outlined'} sx={{
                            margin: '0 5px'
                        }}>{status.display}</Button>)}
                </AccordionDetails>
            </Accordion>
        </div>
    </div>);
}
