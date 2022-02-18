export function writeArtists(list) {
    let temp = list.map((artist, index) => {
        let name = artist.name;
        if (index !== list.length - 1)
            name = `${artist.name}, `;
        return { ...artist, name: name };
    });
    return (temp.map((artist) => <a className='author-link' key={artist.id} href={artist.href}>{artist.name}</a>));
}