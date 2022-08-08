export default function Title({ children }: { children: string }) {
    return <h1 style={{
        fontWeight: 400,
        textAlign: 'center',
        fontSize: '2rem'
    }}>{children}</h1>;
}
