import { Link } from "react-router-dom";

export function writeArtists(list, type) {
    let temp = list.map((artist, index) => {
        let name = artist.name;
        if (index !== list.length - 1)
            name = `${artist.name}, `;
        return { ...artist, name: name };
    });
    if (type === 'link')
        return (temp.map((artist) => <Link className='author-link' key={artist.id} to={{ pathname: `/artists/${artist.id}` }}>{artist.name}</Link>));
    else if (type === 'text')
        return (temp.map((artist) => <span className='author-span' key={artist.id}>{artist.name}</span>));
}

export function getImageArrayFromSongData(song) {
    if (song.images === undefined)
        return song.album.images;
    else
        return song.images;
}