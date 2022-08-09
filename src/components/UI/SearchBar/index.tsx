import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ChangeEventHandler } from 'react';
import Button from '@mui/material/Button';

export default function SearchBar({ value, onChange }: { value: string, onChange: ChangeEventHandler<HTMLInputElement> }) {
    return <Grid container spacing={2} sx={{
        textAlign: 'center',
        verticalAlign: 'middle',
        marginBottom: '25px'
    }}>
        <Grid item md={4}>&nbsp;</Grid>
        <Grid item md={5}>
            <TextField id='search-field'
                       label='Search'
                       variant='standard'
                       size='small'
                       fullWidth
                       value={value}
                       onChange={onChange} />
        </Grid>
        <Grid item md={1}>
            <Button fullWidth>Search</Button>
        </Grid>
        <Grid item md={2}>&nbsp;</Grid>
    </Grid>;
}
