export type LocationData = {
    id: string;
    name: string;
    address: string;
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
        name: 'National Gallery of Ireland',
        address: 'Ooo yaaa',
        description: 'Zucc deez nuts',
        coordinates: {
            lat: 53.34099820201343,
            long: -6.252499104950858,
        },
        imageUrl: 'https://i.imgur.com/KscSzw7m.jpeg',
    },
    {
        id: 'hugh-lane-gallery',
        name: 'Hugh Lane Gallery',
        address: 'Ooo yaaa',
        description: 'Zucc deez nuts',
        coordinates: {
            lat: 53.354212965440375,
            long: -6.264779904090209,
        },
        imageUrl: 'https://i.imgur.com/KscSzw7m.jpeg',
    }
];
