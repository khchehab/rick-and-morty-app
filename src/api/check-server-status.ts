export default async function (): Promise<boolean> {
    const response = await fetch("https://rickandmortyapi.com/api/character", {
        method: "HEAD",
    });
    return response.status === 200;
}
