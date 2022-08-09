import Typography from '@mui/material/Typography';

export default function Title({ children }: { children: string }) {
    return <Typography variant='h4' sx={{
        textAlign: 'center'
    }}>{children}</Typography>;
}
