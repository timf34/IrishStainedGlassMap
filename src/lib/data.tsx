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
        id: '1',
        name: 'National Gallery of Ireland',
        address: 'Ooo yaaa',
        description: 'Zucc deez nuts',
        coordinates: {
            lat: 53.34099820201343,
            long: -6.252499104950858,
        },
        imageUrl: 'https://i.imgur.com/KscSzw7m.jpeg',
    },
];
