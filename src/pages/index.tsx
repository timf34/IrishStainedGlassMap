import Link from 'next/link';
import { locations } from '@/lib/data';
import { LocationData } from '@/lib/data';

export default function Home() {
    return (
        <div>
            <h1>Locations</h1>
            {locations.map((location: LocationData) => (
                <div key={location.id}>
                    <Link href={`/location/${location.id}`}>
                        <div>
                            <h2>{location.name}</h2>
                            <img src={location.imageUrl} alt={location.name} width={200} height={200} />
                            <p>{location.address}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
