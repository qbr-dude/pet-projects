export function writeArtists(list, type) {
    let temp = list.map((artist, index) => {
        let name = artist.name;
        if (index !== list.length - 1)
            name = `${artist.name}, `;
        return { ...artist, name: name };
    });
    if (type === 'link')
        return (temp.map((artist) => <a className='author-link' key={artist.id} href={artist.href}>{artist.name}</a>));
    else if (type === 'text')
        return (temp.map((artist) => <span className='author-span' key={artist.id}>{artist.name}</span>));
}