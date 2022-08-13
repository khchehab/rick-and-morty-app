import { MouseEvent, SyntheticEvent, useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CharacterFilterContextType, StatusOptions } from '../../../../types/character';
import CharacterFilterContext from '../../../../contexts/character-filter-context';
import { Option } from '../../../../types';

export default function FilterAccordion({ filterId }: { filterId: string; }) {
    const filterContext = useContext<CharacterFilterContextType>(CharacterFilterContext);

    let filter: string, setFilter: (filter: string) => void, title: string, options: Option[];
    if (filterId === 'status') {
        filter = filterContext.status;
        setFilter = filterContext.setStatus;
        title = 'Status';
        options = StatusOptions;
    } else {
        title = '';
        options = [];
    }

    function accordionChangeHandler(event: SyntheticEvent, expanded: boolean) {
        filterContext.setExpanded(expanded ? filterId : '');
    }

    const filterButtonClick = (filterValue: string) =>
        (e: MouseEvent<HTMLButtonElement>) => {
            setFilter(filter === filterValue ? '' : filterValue);
            filterContext.setPage(1);
        };

    return <Accordion square={true} expanded={filterContext.expanded === filterId} onChange={accordionChangeHandler}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
            color: '#0c63e4'
        }} />} sx={{
            backgroundColor: '#e7f1ff',
            color: '#0c63e4'
        }}>
            <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {options.map((option) =>
                <Button key={option.value} variant={filter === option.value ? 'contained' : 'outlined'} sx={{
                    margin: '0 5px'
                }} onClick={filterButtonClick(option.value)}>{option.display}</Button>)}
        </AccordionDetails>
    </Accordion>;
}
