import { ChangeEventHandler } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function SearchBar({
    value,
    onChange
}: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}) {
    return <Grid container spacing={2} sx={{
        textAlign: 'center',
        verticalAlign: 'middle',
        marginBottom: '25px'
    }}>
        <Grid item xs={4}>&nbsp;</Grid>
        <Grid item xs={4}>
            <TextField id='search-field'
                       label='Search'
                       variant='standard'
                       size='small'
                       autoComplete='off'
                       fullWidth
                       value={value}
                       onChange={onChange} />
        </Grid>
        <Grid item xs={4}>&nbsp;</Grid>
    </Grid>;
}
