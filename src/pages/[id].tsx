import { useRouter } from 'next/router';
import { locations } from '@/lib/data';
import { LocationData } from '@/lib/data';

export default function Location() {
    const router = useRouter();
    const { id } = router.query;
    const location = locations.find((location: LocationData) => location.id === id);

    if (!location) {
        return <div>Location not found</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">{location.name}</h1>
            <h2 className="text-3xl font-semibold mb-2">{location.artist}</h2>
            <img src={location.imageUrl} alt={location.name} className="w-full max-w-md mb-4 rounded-md shadow-md" />
            <p className="text-xl font-semibold mb-2">{location.location}</p>
            <p className="text-lg mb-4">{location.description}</p>
            <a href="./" className="text-blue-500 hover:underline">Back to locations</a>
        </div>
    );
}
