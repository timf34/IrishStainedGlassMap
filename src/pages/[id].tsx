import { useRouter } from 'next/router';
import { locations } from '@/lib/data';
import { LocationData } from '@/lib/data';

export default function Location() {
    const router = useRouter();
    const { id } = router.query;
    console.log("ID: " + id);
    const location = locations.find((location: LocationData) => location.id === id);

    if (!location) {
        return <div>Location not found</div>;
    }

    return (
        <div>
            <h1>{location.name}</h1>
            <img src={location.imageUrl} alt={location.name} />
            <p>{location.address}</p>
            <p>{location.description}</p>
            <a href="./">Back to locations</a>
        </div>
    );
}
