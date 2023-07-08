export type LocationData = {
    id: string;
    name: string;
    artist: string;
    location: string;
    google_maps_link: string;
    description: string;
    coordinates: {
        lat: number;
        long: number;
    };
    imageUrl: string;
};

export const locations: LocationData[] = [
    {
        id: 'national-gallery-of-ireland',
        name: 'The Mother of Sorrows',
        artist: 'Harry Clarke',
        location: 'National Gallery of Ireland',
        google_maps_link: '',
        description: 'Description text',
        coordinates: {
            lat: 53.34099820201343,
            long: -6.252499104950858,
        },
        imageUrl: 'https://i.imgur.com/KscSzw7m.jpeg',
    },
    {
        id: 'hugh-lane-gallery',
        name: '\'Mr Gilhooley by Liam O\'Flaherty\' for the Geneva Window',
        artist: 'Harry Clarke',
        location: 'Hugh Lane Gallery, Dublin',
        google_maps_link: '',
        description: 'Description text',
        coordinates: {
            lat: 53.354212965440375,
            long: -6.264779904090209,
        },
        imageUrl: 'https://i.imgur.com/GdzHYPQh.jpeg',
    }
];
