import { MouseEvent, SyntheticEvent, useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CharacterContextType, GenderOptions, SpeciesOptions, StatusOptions } from '../../../../types/character';
import CharacterContext from '../../../../contexts/character-context';

export default function FilterAccordion({ filterId }: { filterId: string; }) {
    const context = useContext<CharacterContextType>(CharacterContext);

    const isExpanded = context.expanded === filterId;
    let filter: string, setFilter: (filter: string) => void, title: string, options: string[];
    if (filterId === 'status') {
        filter = context.status;
        setFilter = context.setStatus;
        title = 'Status';
        options = StatusOptions;
    } else if (filterId === 'species') {
        filter = context.species;
        setFilter = context.setSpecies;
        title = 'Species';
        options = SpeciesOptions;
    } else if (filterId === 'gender') {
        filter = context.gender;
        setFilter = context.setGender;
        title = 'Gender';
        options = GenderOptions;
    } else {
        title = '';
        options = [];
    }

    function accordionChangeHandler(event: SyntheticEvent, expanded: boolean) {
        context.setExpanded(expanded ? filterId : '');
    }

    const filterButtonClick = (filterValue: string) =>
        (e: MouseEvent<HTMLButtonElement>) => {
            setFilter(filter === filterValue ? '' : filterValue);
            context.setPage(1);
        };

    return <Accordion square={true} expanded={isExpanded} onChange={accordionChangeHandler}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
            color: '#0c63e4'
        }} />} sx={{
            backgroundColor: isExpanded ? '#e7f1ff' : '#ffffff',
            color: '#0c63e4'
        }}>
            <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {options.map((option) =>
                <Button key={option} variant={filter === option ? 'contained' : 'outlined'} sx={{
                    margin: '5px 5px'
                }} onClick={filterButtonClick(option)}>{option}</Button>)}
        </AccordionDetails>
    </Accordion>;
}
