import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { MouseEventHandler } from 'react';

export default function FilterPanel(props: { onClearFilter: MouseEventHandler<HTMLAnchorElement> }) {
    return (<div style={{
        textAlign: 'center'
    }}>
        <Typography variant='h5' sx={{
            fontWeight: 400
        }}>Filters</Typography>
        <Link onClick={props.onClearFilter} sx={{
            cursor: 'pointer'
        }}>Clear Filters</Link>
    </div>);
}
